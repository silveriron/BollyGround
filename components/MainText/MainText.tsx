import React from 'react';

import styles from './MainText.module.css'

interface MainTextProps {
    content: string
}

const MainText: React.FC<MainTextProps> = ({content}) => {
    return (
        <p className={styles.text} >{content}</p>
    );
};

export default MainText;