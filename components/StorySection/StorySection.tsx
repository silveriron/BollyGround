import React from 'react';

import { ArticleItemProps } from '../ArticleItem/ArticleItem';
import ArticleList from '../ArticleList/ArticleList';
import FeaturedArticle from '../FeaturedAricle/FeaturedArticle';
import Title from '../Title/Title';
import styles from './StorySection.module.css'

export interface StorySectionProps {
    articles: ArticleItemProps[]
}

const StorySection: React.FC<StorySectionProps> = ({articles}) => {
    const featuredAricle = articles.filter((article) => article.featured)
    const defaultArticle = articles.filter((article) => !article.featured)
    return (
        <section className={styles.container}>
            <Title name='Our story' type='main' />
            <div className={styles.storyContainer}>
            <ArticleList articles={defaultArticle} size="nomal" />
            <FeaturedArticle {...featuredAricle[0]} />
            </div>
        </section>
    );
};

export default StorySection;