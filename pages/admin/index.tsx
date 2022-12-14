import React from 'react';
import { useSession } from "next-auth/react"
import LoginPage from '../../components/LoginPage/LoginPage';
import { useRouter } from 'next/router';

const Admin = () => {
    const {status, data} = useSession()
    const {push, query: {error}} = useRouter()

    if (status === 'unauthenticated') {
        return <LoginPage error={error}  />
    } else if (status === 'authenticated') {
        push('/admin/post')
    }
};



export default Admin;