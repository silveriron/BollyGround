import { Button, TextField } from '@mui/material';
import React from 'react';
import { signIn } from 'next-auth/react'

import Title from '../Title/Title';
import styles from './LoginForm.module.css'
import useInput from '../../hooks/useInput';

const LoginForm = () => {
    const {value: email, onChange: emailHandler} = useInput("")
    const {value: password, onChange: passwordHandler} = useInput("")

    const loginHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signIn("credentials", {email, password})
    }

    return (
        <form className={styles.container} onSubmit={loginHandler}>
            <Title name="LOGIN" type='main' />
            <TextField label="Email" value={email} onChange={emailHandler} size='small' name='email' type="text" variant='outlined' />
            <TextField label="password" value={password} onChange={passwordHandler} size='small' name='password' type="password" variant='outlined' />
            <Button variant='contained' color='primary' type='submit' >Login</Button>
        </form>
    );
};

export default LoginForm;