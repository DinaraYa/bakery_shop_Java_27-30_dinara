import type {Path} from "react-router-dom";

export type RouteType = {
    path: Path | string,
    title: string,
}

export type LoginData = {
    email: string,
    password: string
}