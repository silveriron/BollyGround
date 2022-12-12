import React from 'react';
import RecommendStory from '../RecomendStory/RecommendStory';
import StoryDetail from '../StoryDetail/StoryDetail';

import styles from './StoryDetailPage.module.css'
import { Post } from '../../constants/type';

interface StoryDetailPageProps {
    post: Post,
    recommend: Post[]
}

const StoryDetailPage:React.FC<StoryDetailPageProps> = ({post, recommend}) => {
    return (
        <main className={styles.container}>
        <article className={styles.articleContainer}>
            <StoryDetail post={post} />
        </article>
        <RecommendStory posts={recommend} />
        </main>
    );
};

export default StoryDetailPage;