import Link from "next/link";
import React from "react";

import styles from "./Logo.module.css";

interface LogoProps {
  style?: object
}

const Logo: React.FC<LogoProps> = ({style}) => {
  return <Link href='/'><h1 style={style} className={styles.logo}>Bolly Ground</h1></Link>;
};

export default Logo;
