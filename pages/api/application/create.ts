import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { prisma } from "../../../db";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session && session.user) {
    const application = await prisma.application.create({
      data: {
        for: "ACTIVATE",
        additionalUserInfoRequired: true,
        hidden: false,
        quetions: [
          { title: "من هو بطل فايوليت ايفر جاردن" },
          { title: "من هو صديق فايوليت" },
          { title: "كم عدد الانميات التى شاهدتها" },
          { title: "هل فايوليت ايفر جاردن افضل انمى؟ مع التفسير" },
        ],
      },
    });

    const application2 = await prisma.application.create({
      data: {
        for: "ACTIVATE",
        additionalUserInfoRequired: true,
        hidden: false,
        quetions: [
          { title: "من هو بطل شين ساو مان" },
          { title: "من هو صديق باور" },
          { title: "كم عدد الانميات التى شاهدتها" },
          { title: "هل شين ساو مان افضل انمى؟ مع التفسير" },
        ],
      },
    });

    const application3 = await prisma.application.create({
      data: {
        for: "ACTIVATE",
        additionalUserInfoRequired: true,
        hidden: false,
        quetions: [
          { title: "من هو بطل ونبيس" },
          { title: "من هو صديق لوفى" },
          { title: "كم عدد الانميات التى شاهدتها" },
          { title: "هل ونبيس افضل انمى؟ مع التفسير" },
        ],
      },
    });

    const applicatio4 = await prisma.application.create({
      data: {
        for: "ACTIVATE",
        additionalUserInfoRequired: true,
        hidden: false,
        quetions: [
          { title: "من هو بطل شرق عدن" },
          { title: "من هي صديقة اكاريا" },
          { title: "كم عدد الانميات التى شاهدتها" },
          { title: "هل شرق عدن افضل انمى؟ مع التفسير" },
        ],
      },
    });

    res.json({ application, application2, application3, applicatio4 });
  } else {
    res.status(401).send({
      success: false,
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
