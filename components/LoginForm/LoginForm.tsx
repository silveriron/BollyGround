import { Button, TextField } from '@mui/material';
import React from 'react';
import Title from '../Title/Title';

import styles from './LoginForm.module.css'

const LoginForm = () => {
    return (
        <form className={styles.container}>
            <Title name="Login" type='main' />
            <TextField label="Email" size='small' name='email' type="text" variant='outlined' />
            <TextField label="password" size='small' name='password' type="password" variant='outlined' />
            <Button variant='contained' color='primary' type='button' >Login</Button>
        </form>
    );
};

export default LoginForm;