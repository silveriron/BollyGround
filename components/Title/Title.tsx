import React from 'react';
import styles from './Title.module.css'

interface TitleProps {
    name: string,
    type: "main" | "sub"
}

const Title:React.FC<TitleProps> = ({name, type}) => {
    const style = type === 'main' ? styles.mainText : styles.subText
    return <h1 className={`${style} ${styles.text} `} >{name}</h1>
};

export default Title;