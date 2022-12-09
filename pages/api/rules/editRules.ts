import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { prisma } from "../../../db";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { Application, Question, AdditionalUserInfo } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session && session.user) {
    if (!req.body.rules)
      res.status(401).send({
        success: false,
        error: "Server Error",
      });

    let serverSettings = await prisma.mainSettings.update({
      where: { id: "SERVER_SETTINGS" },
      data: {
        rules: req.body.rules,
      },
    });

    res.json({ serverSettings });
  } else {
    res.status(401).send({
      success: false,
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
