import React from 'react';

import {Post} from '../../constants/type'
import PostList from '../PostList/PostList';
import SearchForm from '../SearchForm/SearchForm';
import styles from './StoryPage.module.css'

interface StoryPageProps {
    posts: Post[];
    setKeyword: React.Dispatch<React.SetStateAction<string>>
}

const StoryPage: React.FC<StoryPageProps> = ({posts, setKeyword}) => {
    return (
        <main className={styles.container}>
            <SearchForm setKeyword={setKeyword} />
            <PostList posts={posts} size="large" />
        </main>
    );
};

export default StoryPage;