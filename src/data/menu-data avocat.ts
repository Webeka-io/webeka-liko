// @/data/menu-data.ts
import { IMenuDT } from "@/types/menu-d-t"; 

const menu_data: IMenuDT[] = [
  { id: 1, title: "Accueil", link: "/secteurs/avocat" },
  { id: 2, title: "Offre", link: "/secteurs/avocat/pricing-avocat" },
  { id: 3, title: "Articles", link: "/secteurs/avocat/articles" },
];

export default menu_data;

// mobile menus
export const mobile_menu_data: { id: number; title: string; link: string }[] = [
  { id: 1, title: "Accueil", link: "/secteurs/avocat" },
  { id: 2, title: "Offre", link: "/secteurs/avocat/pricing-avocat" },
  { id: 3, title: "Articles", link: "/secteurs/avocat/articles" },
];
