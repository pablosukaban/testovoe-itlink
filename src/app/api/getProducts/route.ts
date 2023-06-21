import { NextRequest, NextResponse } from "next/server";
import { data } from "@/data";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    products: data,
  });
}
