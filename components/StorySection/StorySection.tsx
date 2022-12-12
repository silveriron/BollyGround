import React from 'react';
import { Post } from '../../constants/type';
import FeaturedPost from '../FeaturedPost/FeaturedPost';

import PostList from '../PostList/PostList';
import Title from '../Title/Title';
import styles from './StorySection.module.css'

export interface StorySectionProps {
    posts: Post[]
}

const StorySection: React.FC<StorySectionProps> = ({posts}) => {
    const featuredPost = posts.filter((post) => post.featured)
    const defaultPosts = posts.filter((post) => !post.featured)
    return (
        <section className={styles.container}>
            <Title name='Our story' type='main' />
            <div className={styles.storyContainer}>
            <PostList posts={defaultPosts} size="nomal" />
            <FeaturedPost {...featuredPost[0]} />
            </div>
        </section>
    );
};

export default StorySection;