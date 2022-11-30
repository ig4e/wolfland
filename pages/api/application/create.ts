import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { prisma } from "../../../db";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { Application } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session && session.user) {
    const applicationBody = req.body.application as Partial<Application>;

    if (
      !applicationBody.for ||
      applicationBody.additionalUserInfoRequired === null ||
      (applicationBody.questions?.length || 0) < 1
    )
      return res.status(400).json({ success: false, error: "Invaild application" });

    const application = await prisma.application.create({
      data: {
        for: applicationBody.for,
        additionalUserInfoRequired: applicationBody.additionalUserInfoRequired,
        hidden: false,
        questions: applicationBody.questions,
      },
    });

    res.json(application);
  } else {
    res.status(401).send({
      success: false,
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
