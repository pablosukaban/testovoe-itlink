import exp from "constants";

export interface ItemType {
  id: number;
  images: string[];
  name: string;
  description: string;
  price: number;
  contacts: string;
  technical_characteristics: {
    car_id: number;
    brand: string;
    model: string;
    productionYear: number;
    body: string;
    mileage: number;
    [key: string]: string | number;
  };
  options: {
    option_name: string;
  }[];
}

export const data: ItemType[] = [
  {
    id: 1,
    images: [
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
      "https://www.mynrma.com.au/-/media/2021-best-cars-ford-mustang-hero-mobile.jpg?h=360&w=640&hash=429e38fbefc48878a54438c21c98f863",
    ],
    name: "Volvo XC70, 2007",
    description: "1973 года выпуска, в отличном состоянии. Пробег 200000 км.",
    price: 1500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 45,
      brand: "Volvo",
      model: "XC70",
      productionYear: 2007,
      body: "body",
      mileage: 200000,
    },
    options: [
      {
        option_name: "Климат-контроль",
      },
      {
        option_name: "Кожаный руль",
      },
      {
        option_name: "Центральный замок",
      },
    ],
  },
  {
    id: 2,
    images: [
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
      "https://www.mynrma.com.au/-/media/2021-best-cars-ford-mustang-hero-mobile.jpg?h=360&w=640&hash=429e38fbefc48878a54438c21c98f863",
    ],
    name: "Volvo XC70, 2007",
    description: "1973 года выпуска, в отличном состоянии. Пробег 200000 км.",
    price: 1500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 45,
      brand: "Volvo",
      model: "XC70",
      productionYear: 2007,
      body: "body",
      mileage: 200000,
    },
    options: [
      {
        option_name: "Климат-контроль",
      },
      {
        option_name: "Кожаный руль",
      },
      {
        option_name: "Центральный замок",
      },
    ],
  },
  {
    id: 3,
    images: [
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
      "https://www.mynrma.com.au/-/media/2021-best-cars-ford-mustang-hero-mobile.jpg?h=360&w=640&hash=429e38fbefc48878a54438c21c98f863",
    ],
    name: "Volvo XC70, 2007",
    description: "1973 года выпуска, в отличном состоянии. Пробег 200000 км.",
    price: 1500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 45,
      brand: "Volvo",
      model: "XC70",
      productionYear: 2007,
      body: "body",
      mileage: 200000,
    },
    options: [
      {
        option_name: "Климат-контроль",
      },
      {
        option_name: "Кожаный руль",
      },
      {
        option_name: "Центральный замок",
      },
    ],
  },
  {
    id: 4,
    images: [
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
      "https://www.mynrma.com.au/-/media/2021-best-cars-ford-mustang-hero-mobile.jpg?h=360&w=640&hash=429e38fbefc48878a54438c21c98f863",
    ],
    name: "Volvo XC70, 2007",
    description: "1973 года выпуска, в отличном состоянии. Пробег 200000 км.",
    price: 1500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 45,
      brand: "Volvo",
      model: "XC70",
      productionYear: 2007,
      body: "body",
      mileage: 200000,
    },
    options: [
      {
        option_name: "Климат-контроль",
      },
      {
        option_name: "Кожаный руль",
      },
      {
        option_name: "Центральный замок",
      },
    ],
  },
  {
    id: 5,
    images: [
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
      "https://www.mynrma.com.au/-/media/2021-best-cars-ford-mustang-hero-mobile.jpg?h=360&w=640&hash=429e38fbefc48878a54438c21c98f863",
    ],
    name: "Volvo XC70, 2007",
    description: "1973 года выпуска, в отличном состоянии. Пробег 200000 км.",
    price: 1500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 45,
      brand: "Volvo",
      model: "XC70",
      productionYear: 2007,
      body: "body",
      mileage: 200000,
    },
    options: [
      {
        option_name: "Климат-контроль",
      },
      {
        option_name: "Кожаный руль",
      },
      {
        option_name: "Центральный замок",
      },
    ],
  },
];
