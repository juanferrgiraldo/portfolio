import { ReactNode } from "react";

export interface INavItem {
  id: string;
  title: string;
  route: string;
  iconComponent?: ReactNode;
}

const NAV_ITEMS: Array<INavItem> = [
  {
    id: "1",
    title: "Experience",
    route: "/experience",
  },
  {
    id: "2",
    title: "Projects",
    route: "/projects",
  },
  {
    id: "1",
    title: "Events",
    route: "/events",
  },
];

export function getNavItems() {
  return NAV_ITEMS;
}
