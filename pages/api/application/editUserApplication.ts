import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { prisma } from "../../../db";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { UserApplication } from "@prisma/client";

import util from "util";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session && session.user) {
    const applicationId = req.query.applicationId! as string;
    const newStatus = req.query.status! as UserApplication["status"];

    const userApplication = await prisma.userApplication.update({
      where: { id: applicationId },
      data: {
        status: newStatus,
      },
      include: {
        user: true,
      },
    });

    const guildId = process.env.DISCORD_GUILD_ID!;
    const activatedRoleId = process.env.DISCORD_GUILD_ACTIVAITED_ROLE_ID!;
    const unActivatedRoleId = process.env.DISCORD_GUILD_UNACTIVAITED_ROLE_ID!;

    if (newStatus === "ACCEPTED") {
      const { idNumber: lastIDNumber } = (await prisma.user.findFirst({
        where: { NOT: { idNumber: undefined } },
        orderBy: {
          idNumber: "desc",
        },
      }))!;

      const user = await prisma.user.update({
        where: { id: userApplication.user.id },
        data: {
          idNumber: lastIDNumber ? lastIDNumber + 1 : 1040,
        },
      })!;

      await fetch(
        `https://discord.com/api/v10/guilds/${guildId}/members/${userApplication.user.discordID}/roles/${activatedRoleId}`,
        {
          method: "PUT",
          headers: {
            Authorization: "Bot " + process.env.DISCORD_CLIENT_TOKEN!,
          },
        }
      );

      await fetch(
        `https://discord.com/api/v10/guilds/${guildId}/members/${userApplication.user.discordID}/roles/${unActivatedRoleId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bot " + process.env.DISCORD_CLIENT_TOKEN!,
          },
        }
      );

      await fetch(
        `https://discord.com/api/v10/guilds/${guildId}/members/${userApplication.user.discordID}`,
        {
          method: "PATCH",
          headers: {
            Authorization: "Bot " + process.env.DISCORD_CLIENT_TOKEN!,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nick: `${userApplication.additionalUserInfo?.sonyAccountName} #${user.idNumber}`,
          }),
        }
      );
    } else {
      await prisma.user.update({
        where: { id: userApplication.user.id },
        data: {
          idNumber: undefined,
        },
      })!;

      await fetch(
        `https://discord.com/api/v10/guilds/${guildId}/members/${userApplication.user.discordID}/roles/${activatedRoleId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bot " + process.env.DISCORD_CLIENT_TOKEN!,
          },
        }
      );

      await fetch(
        `https://discord.com/api/v10/guilds/${guildId}/members/${userApplication.user.discordID}/roles/${unActivatedRoleId}`,
        {
          method: "PUT",
          headers: {
            Authorization: "Bot " + process.env.DISCORD_CLIENT_TOKEN!,
          },
        }
      );

      await fetch(
        `https://discord.com/api/v10/guilds/${guildId}/members/${userApplication.user.discordID}`,
        {
          method: "PATCH",
          headers: {
            Authorization: "Bot " + process.env.DISCORD_CLIENT_TOKEN!,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nick: `${session.user.name}`,
          }),
        }
      );
    }

    res.json(userApplication);
  } else {
    res.status(401).send({
      success: false,
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
