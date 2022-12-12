import React from 'react';

import {Post} from '../../constants/type'
import PostList from '../PostList/PostList';
import SearchForm from '../SearchForm/SearchForm';
import styles from './StoryPage.module.css'

interface StoryPageProps {
    posts: Post[];
}

const StoryPage:React.FC<StoryPageProps> = ({posts}) => {
    return (
        <main className={styles.container}>
            <SearchForm />
            <PostList posts={posts} size="nomal" />
        </main>
    );
};

export default StoryPage;