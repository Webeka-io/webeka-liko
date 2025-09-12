import React from "react";
import Link from "next/link";
import { mobile_menu_data } from "@/data/menu-data";

export default function MobileMenusTwo() {
  return (
    <nav className="tp-main-menu-content">
      <ul>
        {mobile_menu_data.map((menu: any) => {
          // On supporte plusieurs clés possibles pour l'URL
          const href: string = menu.href ?? menu.link ?? menu.url ?? "#";
          const isExternal = /^https?:\/\//i.test(href);

          return (
            <li key={menu.id}>
              <Link
                href={href}
                className="tp-mobile-nav-link d-block py-2"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {menu.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
