export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    isTopSales: boolean;
    isInternational: boolean;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenClothing = "men clothing",
    WomenClothing = "women clothing",
}