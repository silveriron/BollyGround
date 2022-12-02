import React from 'react';

import styles from './Text.module.css'

interface TextProps {
    content: string,
    type: "main" | "sub"
}

const Text: React.FC<TextProps> = ({content, type}) => {
    const style = type === 'main' ? styles.mainText : styles.subText

    return (
        <p className={`${style} ${styles.text} `} >{content}</p>
    );
};

export default Text;