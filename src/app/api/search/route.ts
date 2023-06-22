import { NextRequest, NextResponse } from "next/server";
import { data } from "@/data";
import { filterData } from "@/utils/filter";

export async function GET(req: NextRequest) {
  const newUrl = new URL(req.url);

  const p = new URLSearchParams(newUrl.search);

  const model = p.get("model");
  const brand = p.get("brand");
  const year = p.get("year");
  const body = p.get("body");
  const priceFrom = p.get("priceFrom");
  const priceTo = p.get("priceTo");
  const mileageFrom = p.get("mileageFrom");
  const mileageTo = p.get("mileageTo");

  let filteredData = filterData({
    model,
    body,
    year,
    brand,
    priceTo,
    priceFrom,
    mileageFrom,
    mileageTo,
  });

  return NextResponse.json({ data: filteredData, message: "Hello world" });
}
