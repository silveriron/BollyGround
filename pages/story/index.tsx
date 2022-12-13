import React from 'react';
import { useQuery } from 'react-query';

import StoryPage from '../../components/StoryPage/StoryPage';
import { getPosts } from '../../lib/api/api';

const Story = () => {
    const {data} = useQuery('posts', getPosts)
    

    return <StoryPage posts={data} />
};

export default Story;