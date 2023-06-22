
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
    options?: {
        option_name: string;
    }[];
}
