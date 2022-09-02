import React from "react";
import CourtPage from "../components/pages/CourtPage/CourtPage";
import MainPage from "../components/pages/MainPage/MainPage";


export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const MainRoutes: IRoute[] = [
    {path: "/", exact: true, component: MainPage},
    {path: "*", exact: true, component: MainPage},
    {path: "/Court", exact: true, component: CourtPage},
]