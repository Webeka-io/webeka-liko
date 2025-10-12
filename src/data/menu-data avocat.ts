// @/data/menu-data.ts
import { IMenuDT } from "@/types/menu-d-t"; 

const menu_data: IMenuDT[] = [
  { id: 1, title: "Accueil", link: "/avocat" },
  { id: 2, title: "Offre", link: "/avocat/pricing-avocat" },
  { id: 3, title: "Contact", link: "/avocat/contact-avocat" },
  { id: 3, title: "Portfolio", link: "/avocat/portfolio-avocat" },
];

export default menu_data;

// mobile menus
export const mobile_menu_data: { id: number; title: string; link: string }[] = [
  { id: 1, title: "Accueil", link: "/avocat" },
  { id: 2, title: "Offre", link: "/avocat/pricing-avocat" },
  { id: 3, title: "Contact", link: "/avocat/contact-avocat" },
  { id: 3, title: "Portfolio", link: "/avocat/portfolio-avocat" },
];
