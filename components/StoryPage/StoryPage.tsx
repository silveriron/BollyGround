import React from 'react';

import {Article} from '../../constants/type'
import ArticleList from '../ArticleList/ArticleList';
import SearchForm from '../SearchForm/SearchForm';
import styles from './StoryPage.module.css'

interface StoryPageProps {
    articles: Article[];
}

const StoryPage:React.FC<StoryPageProps> = ({articles}) => {
    return (
        <main className={styles.container}>
            <SearchForm />
            <ArticleList articles={articles} />
        </main>
    );
};

export default StoryPage;