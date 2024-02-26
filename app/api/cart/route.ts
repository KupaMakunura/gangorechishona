import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import { CartForm } from "@/constants/interfaces";
import { cartValidationSchema } from "@/validators/server";

export const POST = async (request: NextRequest) => {
  const body: CartForm = await request.json();

  const validation = cartValidationSchema.safeParse(body);

  if (!validation) return NextResponse.json({ valid: false });

  // const existingCartItem = await prisma.

  return NextResponse.json({ created: true });
};
