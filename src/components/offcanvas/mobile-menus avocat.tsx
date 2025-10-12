// app/components/MobileMenus.tsx (ou où tu veux)
import React from "react";
import Link from "next/link";
import menu_data, { mobile_menu_data } from "@/data/menu-data avocat"; // adapte le chemin si besoin

export default function MobileMenus() {
  // Priorité au jeu de données mobile si présent
  const items = (mobile_menu_data?.length ? mobile_menu_data : menu_data) ?? [];

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {items.map((item) => ( 
          <li key={`${item.id}-${item.title}`}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
