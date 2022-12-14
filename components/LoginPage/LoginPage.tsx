import { Alert } from '@mui/material';
import React from 'react';

import LoginForm from '../LoginForm/LoginForm';
import styles from './LoginPage.module.css'

interface LoginPageProps {
    error?: string | string[] | undefined
}

const LoginPage = ({error}: LoginPageProps) => {


    return (
        <main className={styles.container}>
            <LoginForm />
            {error && <Alert severity='error'>계정 정보를 확인해주세요.</Alert>}
        </main>
    );
};

export default LoginPage;