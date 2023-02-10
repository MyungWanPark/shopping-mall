export type UpdatedProductType = {
    title: string;
    price: number;
    category: string;
    description: string;
    options: string[];
    id: string;
    imgURL: string;
};

export type CartProductType = {
    title: string;
    price: number;
    category: string;
    description: string;
    option: string;
    id: string;
    imgURL: string;
    quantity: number;
};
