// @/data/menu-data.ts
import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  { id: 1, title: "Accueil", link: "/home-4" },
  { id: 2, title: "Offre", link: "/pricing" },
  { id: 3, title: "Contact", link: "/contact" },
  { id: 3, title: "Portfolio", link: "/portfolio" },
];

export default menu_data;

// mobile menus
export const mobile_menu_data: { id: number; title: string; link: string }[] = [
  { id: 1, title: "Accueil", link: "/home-4" },
  { id: 2, title: "Offre", link: "/pricing" },
  { id: 3, title: "Contact", link: "/contact" },
  { id: 3, title: "Portfolio", link: "/portfolio" },
];
