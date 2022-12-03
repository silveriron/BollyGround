import Link from "next/link";
import Image from "next/image";
import React from "react";

import styles from "./NavMenu.module.css";

interface NavMenuProps {
  isActive: boolean;
  name: string;
  href: string;
  isDark?: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({
  isActive,
  name,
  href,
  isDark = false,
}) => {
  const bolly = isActive ? (
    <Image
      src={isDark ? "/img/Bolly_light.png" : "/img/Bolly_dark.png"}
      alt="dog"
      width={40}
      height={40}
    />
  ) : (
    <div className={styles.block}></div>
  );

  const textColor = isDark ? styles.textLight : styles.textDark;

  return (
    <li className={styles.list}>
      <Link legacyBehavior href={href}>
        <a>
          {bolly}
          <p className={textColor}>{name.toUpperCase()}</p>
        </a>
      </Link>
    </li>
  );
};

export default NavMenu;
