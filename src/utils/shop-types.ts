import type {Path} from "react-router-dom";

export enum Roles {
    ALL = 0,
    USER = 1,
    ADMIN = 2,
    NO_AUTH = 3
}
export type RouteType = {
    path: Path | string,
    title: string,
    role?: Roles
}

export type LoginData = {
    email: string,
    password: string
}

export type RegisterData = {
    firstName: string | "",
    lastName: string | "",
    email: string,
    password: string
}

export type ProductType = {
    id?: string,
    title: string,
    category: string,
    unit: string,
    cost: number,
    image: string
}

export type Category = {
    category_name: string
}

export type ShopCartProdType = {
    cartProdId: string,
    count: number
}

export type TableShopCartDataType = ProductType &{
    count: number,
    amount: number
}
