import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { prisma } from "../../../db";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { UserApplication } from "@prisma/client";

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
    } else {
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
