import React from 'react';
import styles from './MainTitle.module.css'

interface MainTitleProps {
    name: string
}

const MainTitle:React.FC<MainTitleProps> = ({name}) => {
    return <h1 className={styles.title} >{name}</h1>
};

export default MainTitle;