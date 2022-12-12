import { Button, TextField } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { signIn, useSession } from 'next-auth/react'

import Title from '../Title/Title';
import styles from './LoginForm.module.css'
import useInput from '../../hooks/useInput';
import LoadingModal from '../LoadingModal/LoadingModal';

const LoginForm = () => {
    const {value: email, onChange: emailHandler} = useInput("")
    const {value: password, onChange: passwordHandler} = useInput("")
    const [isLoading, setIsLoading] = useState(false)


    const loginHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signIn("credentials", {email, password})
        setIsLoading(true)
    }

    return (
        <>
        <LoadingModal isLoading={isLoading}/>
        <form className={styles.container} onSubmit={loginHandler}>
            <Title name="LOGIN" type='main' />
            <TextField label="Email" value={email} onChange={emailHandler} size='small' name='email' type="text" variant='outlined' />
            <TextField label="password" value={password} onChange={passwordHandler} size='small' name='password' type="password" variant='outlined' />
            <Button variant='contained' color='primary' type='submit' >Login</Button>
        </form>
        </>
    );
};

export default LoginForm;