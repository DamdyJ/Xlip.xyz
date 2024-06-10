import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const count = await prisma.linkCount.findFirst({
      where: { id: 1 },
    });
    console.log({ count });
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const count = await prisma.linkCount.update({
      where: { id: 1 },
      data: { count: { increment: 1 } },
    });
    return NextResponse.json({ count }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
export async function POST(req: NextRequest) {
  try {
    const count = await prisma.linkCount.create({
      data: { id: 1, count: 0 },
    });
    return NextResponse.json({ count }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
