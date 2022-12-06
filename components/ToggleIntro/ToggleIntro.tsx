import { Button } from '@mui/material';
import React, { useState } from 'react';

import styles from './ToggleIntro.module.css'

interface ToggleIntroProps {
    isBolly: boolean,
    changeState: (type:string) => void
}

const ToggleIntro:React.FC<ToggleIntroProps> = ({isBolly, changeState}) => {
    
    return (
        <div className={styles.container}>
            <Button variant={isBolly ? 'contained': 'outlined'} onClick={() => changeState('bolly')}>Bolly</Button>
            <Button variant={isBolly ? 'outlined': 'contained'} onClick={() => changeState('ttochi')}>TTochi</Button>
        </div>
    );
};

export default ToggleIntro;