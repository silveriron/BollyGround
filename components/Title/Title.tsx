import React from 'react';
import styles from './Title.module.css'

interface TitleProps {
    name: string,
    type: "main" | "sub",
    style?: object
}

const Title:React.FC<TitleProps> = ({name, type, style}) => {
    if (type === "main") {
        return <h2 style={style} className={`${styles.mainText} ${styles.text} `} >{name}</h2>
    } else {
        return <h3 style={style} className={`${styles.subText} ${styles.text} `} >{name}</h3>
    }
};

export default Title;