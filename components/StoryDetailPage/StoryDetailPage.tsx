import React from 'react';
import RecommendStory from '../RecomendStory/RecommendStory';
import StoryDetail from '../StoryDetail/StoryDetail';

import styles from './StoryDetailPage.module.css'
import { Article, Author } from '../../constants/type';

interface StoryDetailPageProps {
    article: Article,
    recommend: Article[]
}

const StoryDetailPage:React.FC<StoryDetailPageProps> = ({article, recommend}) => {
    return (
        <main className={styles.container}>
        <article className={styles.articleContainer}>
            <StoryDetail article={article} />
        </article>
        <RecommendStory articles={recommend} />
        </main>
    );
};

export default StoryDetailPage;