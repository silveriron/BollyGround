import React from 'react';

import styles from './Text.module.css'

interface TextProps {
    content: string,
    type: "main" | "sub"
}

const Text: React.FC<TextProps> = ({content, type}) => {
    return (
        <p className={type === "main" ? styles.mainText : styles.subText} >{content}</p>
    );
};

export default Text;