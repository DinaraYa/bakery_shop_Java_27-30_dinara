import {Roles, type RouteType} from "../utils/shop-types.ts";
import {Paths} from "../utils/paths.ts";

export const navItems: RouteType[] = [
    {path: Paths.HOME, title: "Home", role: Roles.ALL},
    {path: Paths.ORDERS, title: "Orders", role: Roles.USER},
    {path: Paths.CART, title: "Shopping Cart", role: Roles.USER},
    {path: Paths.CUSTOMERS, title: "Customers", role: Roles.ADMIN},
    {path: Paths.PRODUCTS, title: "Products", role: Roles.ALL},
    {path: Paths.LOGIN, title: "Login", role: Roles.NO_AUTH},
    {path: Paths.LOGOUT, title: "Logout", role: Roles.USER},
    {path: Paths.REGISTER, title: "Register"}
]

export const productsItems: RouteType[] = [
    {path: Paths.BREAD, title: "Bread"},
    {path: Paths.DAIRY, title: "Dairy"},
    {path: Paths.BACK, title: "Back to main menu"}
]