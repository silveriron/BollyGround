import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import StoryDetailPage from '../../components/StoryDetailPage/StoryDetailPage';
import { getPost, getPosts } from '../../lib/api/api';

const StoryDetail = () => {
    const router = useRouter()
    const {id}= router.query 
    const {data:posts} = useQuery('posts', getPosts)
    const post = posts.find((post) => post._id === id)
    
    return <StoryDetailPage post={post} recommend={posts}  />
};

export default StoryDetail;