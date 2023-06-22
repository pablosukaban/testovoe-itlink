import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const formData = await req.formData();

  console.log("formdata", formData);

  return NextResponse.json({ message: "Hello World!" });
}
