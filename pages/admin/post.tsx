import React from 'react';
import { useSession } from "next-auth/react"
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';

const EditorPage = dynamic(import('../../components/EditorPage/EditorPage'))

const Post = () => {
    const {status} = useSession()
    const {push} = useRouter()

    if (status === 'unauthenticated') {
        push('/admin')
    } else if (status === 'authenticated') {
        return <EditorPage />
    }
};

export default Post;