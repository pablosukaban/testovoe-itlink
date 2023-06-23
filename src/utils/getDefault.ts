import { Inputs, ItemType } from "@/types";

export const getDefault = (chosenCar: ItemType) => {
  const defaultValues: Inputs = {
    name: "",
    description: "",
    price: 0,
    images: [],
    contacts: "",
    technical_characteristics: {
      model: "",
      brand: "",
      productionYear: 0,
      body: "",
      mileage: 0,
    },
  };

  if (!chosenCar) return defaultValues;

  const {
    id,
    technical_characteristics,
    images,
    description,
    name,
    price,
    contacts,
    options,
  } = chosenCar;

  // const imageUrl = URL.createObjectURL(images[0] as Blob)

  const res: Inputs = {
    name,
    images: [new Blob(images as Blob[], { type: "image/jpeg" })],
    description,
    contacts,
    price,
    technical_characteristics,
    options,
  };

  return res;
};
