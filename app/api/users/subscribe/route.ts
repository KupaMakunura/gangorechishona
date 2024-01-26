import prisma from "../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { subscribeValidationSchema } from "@/validators";

export const POST = async (request: NextRequest) => {

  const body = await request.json();

  const validation = subscribeValidationSchema.safeParse(body);

  if (!validation) return NextResponse.json({ valid: false });

  const data = await prisma.newsLetterSubscriber.create({
    data: {
      email: body.email,
    },
  });

  const response = {
    data:data,
    subscribed:true
  }

  

  return NextResponse.json(response);
};
