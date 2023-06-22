import exp from "constants";
import { ItemType } from "@/types";

export const data: ItemType[] = [
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
      brand: "Brand5",
      model: "model5",
      productionYear: 2007,
      body: "body",
      mileage: 200000,
    },
    // options: [
    //   {
    //     option_name: "Климат-контроль",
    //   },
    //   {
    //     option_name: "Кожаный руль",
    //   },
    //   {
    //     option_name: "Центральный замок",
    //   },
    // ],
  },

  {
    id: 6,
    images: [
      "https://kialife.ru/wp-content/uploads/2022/01/%D1%86%D0%B5%D1%80%D0%B0%D1%82%D0%BE-%D0%B4%D0%B6%D0%B8-%D1%82%D0%B8-%D0%BB%D0%B0%D0%B9%D0%BD-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-1170x586.jpg",
    ],
    name: "Kia Cerato GT, 2022",
    description:
      "Новый автомобиль Kia Cerato GT 2022 года выпуска. Пробег 0 км.",
    price: 2500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 46,
      brand: "Kia",
      model: "Cerato",
      productionYear: 2022,
      body: "hatchback",
      mileage: 0,
    },
    options: [
      {
        option_name: "Система навигации",
      },
      {
        option_name: "Подогрев передних сидений",
      },
      {
        option_name: "Датчик дождя",
      },
    ],
  },

  {
    id: 7,
    images: [
      "https://autopremiumgroup.ru/m/_versions/info/toyota/gr_supra/2022/1_banner.jpg",
    ],
    name: "Toyota Supra, 2022",
    description:
      "Toyota Supra 2022 года выпуска в отличном состоянии. Пробег 5000 км.",
    price: 3500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 47,
      brand: "Toyota",
      model: "Supra",
      productionYear: 2022,
      body: "coupe",
      mileage: 5000,
    },
    options: [
      {
        option_name: "Система доступа без ключа",
      },
      {
        option_name: "Панорамная крыша",
      },
      {
        option_name: "Спортивные сиденья",
      },
    ],
  },

  {
    id: 8,
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/2020-audi-q7-205-1584322591.jpg?crop=0.997xw:0.748xh;0.00160xw,0.0913xh&resize=1200:*",
    ],
    name: "Audi Q7, 2022",
    description: "Audi Q7 2022 года выпуска. Пробег 10000 км. Один владелец.",
    price: 4500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 48,
      brand: "Audi",
      model: "Q7",
      productionYear: 2022,
      body: "SUV",
      mileage: 10000,
    },
    options: [
      {
        option_name: "Адаптивный круиз-контроль",
      },
      {
        option_name: "Панорамный вид из кабины",
      },
      {
        option_name: "Система контроля слепых зон",
      },
    ],
  },

  {
    id: 9,
    images: ["https://a.d-cd.net/3AAAAgMszeA-1920.jpg"],
    name: "Porsche 911 Turbo S, 2021",
    description:
      "Эксклюзивный Porsche 911 Turbo S 2021 года выпуска. Пробег 2000 км.",
    price: 7000000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 49,
      brand: "Porsche",
      model: "911",
      productionYear: 2021,
      body: "coupe",
      mileage: 2000,
    },
    options: [
      {
        option_name: "Керамические тормозные диски",
      },
      {
        option_name: "Система контроля устойчивости",
      },
      {
        option_name: "Спортивный выхлоп",
      },
    ],
  },
];
