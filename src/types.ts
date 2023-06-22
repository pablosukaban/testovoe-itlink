export interface ItemType {
  id: number;
  images: string[];
  name: string;
  description: string;
  price: number;
  contacts: string;
  technical_characteristics?: {
    car_id: number;
    brand: string;
    model: string;
    productionYear: number;
    body: string;
    mileage: number;
    [key: string]: string | number;
  };
  options?: Additional[];
}

export type Additional = {
  id: number;
  option_name: string;
};

export type Inputs = {
  name: string;
  description: string;
  price: number;
  images: string[];
  contacts: string;
  technical_characteristics?: {
    model: string;
    brand: string;
    productionYear: number;
    body: string;
    mileage: number;
  };
  options?: Additional[];
};
