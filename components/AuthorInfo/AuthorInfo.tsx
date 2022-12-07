import React from 'react';
import {Avatar} from '@mui/material'

import styles from './AuthorInfo.module.css'
import Text from '../Text/Text';
import { Author } from '../../constants/type';

interface AuthorInfoProps {
    author: Author
    timestamp: string
}

const AuthorInfo:React.FC<AuthorInfoProps> = ({author ,timestamp}) => {
    return (
        <div className={styles.container}>
            <Avatar alt={author.name} src={author.avatar} sx={{width: 44, height: 44}} />
            <Text content={author.name} type='main'/>
            <Text content={timestamp} type='sub'/>
        </div>
    );
};

export default AuthorInfo;