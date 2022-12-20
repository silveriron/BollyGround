import React, {useState} from 'react';
import { useQuery } from 'react-query';

import StoryPage from '../../components/StoryPage/StoryPage';
import { getPosts } from '../../lib/api/api';

const Story = () => {
    const [keyword, setKeyword] = useState('')
    const {data: posts} = useQuery(['posts', keyword], () => getPosts(keyword))

    return <StoryPage setKeyword={setKeyword} posts={posts} />
};

export default Story;