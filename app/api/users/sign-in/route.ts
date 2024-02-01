import prisma from "../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { signInValidationSchema } from "@/validators/server";
import { comparePassword } from "@/utils";
import { SignInForm } from "@/constants/interfaces";

export const POST = async (request: NextRequest) => {
  
  const body: SignInForm = await request.json();

  const validation = signInValidationSchema.safeParse(body);

  if (!validation) return NextResponse.json({ valid: false });

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  const compare = await comparePassword(
    body.password,
    typeof user?.password === "string" ? user.password : ""
  );

  if (user) {
    if (compare) {
      return NextResponse.json({ login: true, user: user });
    } else {
      return NextResponse.json({ password: false });
    }
  } else {
    return NextResponse.json({ email: false });
  }
};
