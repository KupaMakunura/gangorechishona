import prisma from "../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { subscribeValidationSchema } from "@/validators/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = subscribeValidationSchema.safeParse(body);

  if (!validation) return NextResponse.json({ valid: false });

  const existingUser = await prisma.newsLetterSubscriber.findUnique({
    where: {
      email: body.email,
    },
  });

  if (existingUser) {
    return NextResponse.json({ exists: true });
  } else {
    const data = await prisma.newsLetterSubscriber.create({
      data: {
        email: body.email,
      },
    });

    const response = {
      data: data,
      subscribed: true,
    };

    return NextResponse.json(response);
  }
};
