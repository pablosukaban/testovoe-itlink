import { NextRequest, NextResponse } from "next/server";
import { data } from "@/data";

type BodyType = {
  name: string;
  description: string;
  price: string;
  photo: string;
  contacts: string;
  brand?: string;
  model?: string;
  year?: string;
  body?: string;
  mileage?: string;
};

export async function GET() {
  return NextResponse.json({ data: data });
}

export async function POST(req: Request, res: NextResponse) {
  const body: BodyType = await req.json();

  return NextResponse.json({ data: { ...body, id: Date.now() } });
}

export async function PUT(req: Request, res: NextResponse) {
  const body = await req.json();

  return NextResponse.json({ data: body });
}
