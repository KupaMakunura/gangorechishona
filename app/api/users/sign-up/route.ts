import prisma from "../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { signUpValidationSchema } from "@/validators/server";
import { hashPassword } from "@/utils";
import { SignUpForm } from "@/constants/interfaces";

export const POST = async (request: NextRequest) => {
  const body: SignUpForm = await request.json();

  const hashedPassword = await hashPassword(body.password);

  const validation = signUpValidationSchema.safeParse(body);

  if (!validation) return NextResponse.json({ valid: false });

  const existingUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (existingUser) {
    return NextResponse.json({ exists: true });
  } else {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        first_name: body.first_name,
        last_name: body.last_name,
        password: hashedPassword,
      },
    });

    if (user) {
      return NextResponse.json({ created: true, data: user });
    } else {
      return NextResponse.json({ created: false });
    }
  }
};
