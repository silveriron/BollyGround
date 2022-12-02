import React from 'react';

import styles from './NavBar.module.css'
import NavMenu from '../NavMenu/NavMenu'

const NavBar = () => {
    const path = window.location.pathname
    const linkList = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Story',
            href: '/story',
        },
        {
            name: 'Ground',
            href: '/ground',
        },
    ]
    return (
        <ul className={styles.menu}>
            {linkList.map((link) => <NavMenu key={link.name} name={link.name} href={link.href} isDark={path === '/' ? true : false} isActive={path === link.href ? true : false} />)}
        </ul>
    );
};

export default NavBar;