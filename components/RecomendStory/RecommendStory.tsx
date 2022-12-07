import React from 'react';

import RecommendItem from '../RecommendItem/RecommendItem';
import Title from '../Title/Title';
import styles from './RecommendStory.module.css'
import { Article } from '../../constants/type';

interface RecommendStoryProps {
    articles: Article[]
}

const RecommendStory: React.FC<RecommendStoryProps> = ({articles}) => {
    return (
        <aside className={styles.container}>
            <Title name="Recommend" type='main' />
            <ul>
                {articles.map((article) => <RecommendItem key={article.title} {...article} />)}
            </ul>
        </aside>
    );
};

export default RecommendStory;