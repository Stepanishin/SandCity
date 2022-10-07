import React from "react";
import CourtPage from "../components/pages/CourtPage/CourtPage";


export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const MainRoutes: IRoute[] = [
    {path: "/", exact: true, component: CourtPage},
    {path: "*", exact: true, component: CourtPage},
]