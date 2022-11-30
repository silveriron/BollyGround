import React, {FC} from 'react';
import styles from './Button.module.css'

export interface ButtonProps {
    onClick: () => void,
    name: string,
    style?: object,
} 

const Button:FC<ButtonProps> = ({onClick, name, style={backgroundColor: 'white'}}) => {
    return (
        <button className={styles.btn} style={{...style}} onClick={onClick}>{name}</button>
    );
};

export default Button;