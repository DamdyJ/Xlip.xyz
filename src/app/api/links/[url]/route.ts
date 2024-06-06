//Spny.xyz

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { url: string } },
) {
  try {
    const link = await prisma.link.findFirst({
      where: {
        shortLink: params.url,
      },
    });
    if (!link) {
      return NextResponse.json("Not Found", { status: 404 });
    }
    return NextResponse.json({ link }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { url: string } },
) {
  try {
    const { redirect } = await req.json();
    const link = await prisma.link.create({
      data: { shortLink: params.url, redirect },
    });
    return NextResponse.json({ link }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
