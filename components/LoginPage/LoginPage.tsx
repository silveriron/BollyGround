import React from 'react';

import LoginForm from '../LoginForm/LoginForm';
import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <main className={styles.container}>
            <LoginForm />
        </main>
    );
};

export default LoginPage;