import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { prisma } from "../../../db";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session && session.user) {
    const sessionUser: {
      name: string;
      email: string;
      image: string;
      id: string;
    } = session.user as any;

    const userId = sessionUser.id;

    const managmentRoleId = process.env.DISCORD_GUILD_MANAGMENT_ROLE_ID!;
    const activatedRoleId = process.env.DISCORD_GUILD_ACTIVAITED_ROLE_ID!;
    const lockedRoleId = process.env.DISCORD_GUILD_LOCKED_ROLE_ID!;

    if (!userId)
      return res
        .status(400)
        .json({ success: false, error: "User ID Must Not Be Null" });

    const guildResponse = await fetch(
      `https://discord.com/api/v10/guilds/${process.env.DISCORD_GUILD_ID!}`,
      {
        headers: {
          Authorization: "Bot " + process.env.DISCORD_CLIENT_TOKEN!,
        },
      }
    );

    const userResponse = await fetch(
      `https://discord.com/api/v10/guilds/${process.env
        .DISCORD_GUILD_ID!}/members/${userId}`,
      {
        headers: {
          Authorization: "Bot " + process.env.DISCORD_CLIENT_TOKEN!,
        },
      }
    );

    const user = (await userResponse.json()) as any;
    const guild = (await guildResponse.json()) as any;

    const { roles } = guild;
    const adminRoles = roles
      .map((role: any) => {
        return {
          ...role,
          isAdmin: (role.permissions & (1 << 3)) === 8,
        };
      })
      .filter((role: any) => role.isAdmin);

    const adminRolesIds = adminRoles.map((role: any) => role.id);

    if (!user.user?.id)
      return res
        .status(400)
        .json({ success: false, error: "User Must Be In The Server" });
    let dbUser = await prisma.user.findUnique({
      where: { discordID: user.user?.id },
      include: {
        applications: {
          orderBy: { updatedAt: "desc" },
          include: { application: true },
        },
      },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          discordID: user.user?.id,
        },
        include: {
          applications: {
            orderBy: { updatedAt: "desc" },
            include: { application: true },
          },
        },
      });
    }

    const isUserAdmin = user.roles.some((role: string) =>
      adminRolesIds.includes(role)
    );
    const isUserMod = isUserAdmin || user.roles.includes(managmentRoleId);
    const isUserActivated = user.roles.includes(activatedRoleId);
    const isUserLocked = user.roles.includes(lockedRoleId);

    res.status(200).json({
      id: dbUser.id,
      admin: isUserAdmin,
      mod: isUserMod,
      activated: isUserActivated,
      locked: isUserLocked,
      userApplyApplication: dbUser.applications.find(
        (application) => application.application.for === "ACTIVATE"
      ),
      updatedAt: dbUser.updatedAt,
      createdAt: dbUser.createdAt,
      profile: {
        ...user.user,
        avatar: `https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}.webp`,
      },
    });
  } else {
    res.status(401).send({
      success: false,
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
