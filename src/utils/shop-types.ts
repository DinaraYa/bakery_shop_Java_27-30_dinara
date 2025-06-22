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