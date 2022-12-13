import React from "react";

import styles from "./NavBar.module.css";
import NavMenu from "../NavMenu/NavMenu";
import Logo from "../Logo/Logo";
import { useRouter } from "next/router";
import {linkList} from '../../data/navList'

const NavBar = () => {
  const path = useRouter().pathname;

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
            isActive={link.href === '/story' && path.match(/story/i) ? true : path === link.href ? true : false}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
