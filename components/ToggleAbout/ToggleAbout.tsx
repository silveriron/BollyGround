import { Button } from '@mui/material';
import React from 'react';

import styles from './ToggleAbout.module.css'

interface ToggleAboutProps {
    isBolly: boolean,
    changeState: (type:string) => void
}

const ToggleAbout:React.FC<ToggleAboutProps> = ({isBolly, changeState}) => {
    
    return (
        <div className={styles.container}>
            <Button variant={isBolly ? 'contained': 'outlined'} onClick={() => changeState('bolly')}>Bolly</Button>
            <Button variant={isBolly ? 'outlined': 'contained'} onClick={() => changeState('ttochi')}>TTochi</Button>
        </div>
    );
};

export default ToggleAbout;