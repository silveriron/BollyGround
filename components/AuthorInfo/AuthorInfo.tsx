import React from 'react';
import {Avatar} from '@mui/material'

import styles from './AuthorInfo.module.css'
import Text from '../Text/Text';

const AuthorInfo = () => {
    return (
        <div className={styles.container}>
            <Avatar alt='avatar' src='/img/avatar.png' sx={{width: 44, height: 44}} />
            <Text content='Author' type='main'/>
            <Text content='3 days ago' type='sub'/>
        </div>
    );
};

export default AuthorInfo;