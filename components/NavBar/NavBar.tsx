import React from "react";

import styles from "./NavBar.module.css";
import NavMenu from "../NavMenu/NavMenu";
import Logo from "../Logo/Logo";
import { useRouter } from "next/router";

const NavBar = () => {
  const path = useRouter().pathname;
  const linkList = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Story",
      href: "/story",
    },
    {
      name: "Ground",
      href: "/ground",
    },
  ];
  return (
    <nav className={styles.nav}>
      <div>
        <Logo />
      </div>
      <ul className={styles.menu}>
        {linkList.map((link) => (
          <NavMenu
            key={link.name}
            name={link.name}
            href={link.href}
            isDark={path === "/" ? true : false}
            isActive={path === link.href ? true : false}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
