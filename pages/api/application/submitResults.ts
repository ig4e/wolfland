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
    const applicationId = req.query.applicationId! as string;
    const sessionUser: {
      name: string;
      email: string;
      image: string;
      id: string;
    } = session.user as any;

    const user = await prisma.user.findUnique({
      where: { discordID: sessionUser.id },
      include: { applications: { include: { application: true } } },
    });

    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!user || !application)
      return res.json({ success: false, error: "Invaild applicationId" });

    if (application.hidden)
      return res.json({ success: false, error: "Invaild application" });

    if (
      user?.applications.some(
        (userApplication) =>
          userApplication.application.for === application?.for &&
          (userApplication.status === "ACCEPTED" ||
            userApplication.status === "PENDING")
      )
    )
      return res.json({ success: false, error: "You Have Already Applied" });

    const quetionsWithResponse: Question[] = req.body?.quetions;
    const additionalUserInfo: AdditionalUserInfo = req.body?.additionalUserInfo;

    if (
      !quetionsWithResponse ||
      quetionsWithResponse.some(
        (question) =>
          !question.response ||
          !application?.quetions.some((aq) => aq.id === question.id)
      )
    )
      return res.json({ success: false, error: "Invaild Body / Questions" });

    if (
      (application.additionalUserInfoRequired && !additionalUserInfo) ||
      !additionalUserInfo.age ||
      !additionalUserInfo.name ||
      !additionalUserInfo.sonyAccountName
    )
      return res.json({
        success: false,
        error: "Invaild Body / AdditionalUserInfo",
      });

    const userApplication = await prisma.userApplication.create({
      data: {
        application: {
          connect: {
            id: application?.id,
          },
        },
        user: {
          connect: {
            id: user.id,
          },
        },
        quetions: quetionsWithResponse,
        additionalUserInfo:
          (additionalUserInfo && {
            age: Number(additionalUserInfo.age),
            name: additionalUserInfo.name,
            sonyAccountName: additionalUserInfo.sonyAccountName,
          }) ||
          undefined,
      },
    });

    res.json({ application, user, userApplication });
  } else {
    res.status(401).send({
      success: false,
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
