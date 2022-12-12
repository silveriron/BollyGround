import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './LoadingModal.module.css'

interface LoadingModalProps {
    isLoading: boolean
}

const LoadingModal:React.FC<LoadingModalProps> = ({isLoading}) => {
    return (
        <div style={isLoading ? {display: "flex"} : {display: 'none'}} className={styles.modal}>

            <CircularProgress />

        </div>
    );
};

export default React.memo(LoadingModal);