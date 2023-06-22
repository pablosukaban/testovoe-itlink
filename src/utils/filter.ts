import { ItemType, data } from "@/data";

// const model = p.get("model");
// const brand = p.get("brand");
// const year = p.get("year");
// const body = p.get("body");
// const priceFrom = p.get("priceFrom");
// const priceTo = p.get("priceTo");
// const mileageFrom = p.get("mileageFrom");
// const mileageTo = p.get("mileageTo");

type FilterParamsType = {
  model: string | null;
  brand: string | null;
  year: string | null;
  body: string | null;
  priceFrom: string | null;
  priceTo: string | null;
  mileageFrom: string | null;
  mileageTo: string | null;
};

export function filterData(filterParams: FilterParamsType): ItemType[] {
  let filteredData = data;

  const {
    mileageTo,
    mileageFrom,
    priceFrom,
    priceTo,
    model,
    brand,
    year,
    body,
  } = filterParams;

  if (model) {
    filteredData = filteredData.filter(
      (item) =>
        item.technical_characteristics.model.toLowerCase() ===
        model.toLowerCase()
    );
  }

  if (brand) {
    filteredData = filteredData.filter(
      (item) =>
        item.technical_characteristics.brand.toLowerCase() ===
        brand.toLowerCase()
    );
  }

  if (year) {
    filteredData = filteredData.filter(
      (item) => item.technical_characteristics.productionYear === parseInt(year)
    );
  }

  if (body) {
    filteredData = filteredData.filter(
      (item) =>
        item.technical_characteristics.body.toLowerCase() === body.toLowerCase()
    );
  }

  if (priceFrom) {
    filteredData = filteredData.filter(
      (item) => item.price >= parseInt(priceFrom)
    );
  }

  if (priceTo) {
    filteredData = filteredData.filter(
      (item) => item.price <= parseInt(priceTo)
    );
  }

  if (mileageFrom) {
    filteredData = filteredData.filter(
      (item) => +item.technical_characteristics.mileage >= parseInt(mileageFrom)
    );
  }

  if (mileageTo) {
    filteredData = filteredData.filter(
      (item) => +item.technical_characteristics.mileage <= parseInt(mileageTo)
    );
  }

  return filteredData;
}
