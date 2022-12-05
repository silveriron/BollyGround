import React from 'react';

import { ArticleItemProps } from '../ArticleItem/ArticleItem';
import ArticleList from '../ArticleList/ArticleList';
import FeaturedArticle from '../FeaturedAricle/FeaturedArticle';
import styles from './StorySection.module.css'

interface StorySectionProps {
    articles: ArticleItemProps[]
}

const StorySection: React.FC<StorySectionProps> = ({articles}) => {
    const featuredAricle = articles.filter((article) => article.featured)
    const defaultArticle = articles.filter((article) => !article.featured)
    return (
        <div className={styles.container}>
            <ArticleList articles={defaultArticle} />
            <FeaturedArticle {...featuredAricle[0]} />
        </div>
    );
};

export default StorySection;