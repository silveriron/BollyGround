import React from 'react';
import AuthorInfo from '../AuthorInfo/AuthorInfo';

import Text from '../Text/Text';
import Title from '../Title/Title';
import styles from './StoryDetail.module.css'
import {Post} from '../../constants/type'

interface StoryDetailProps {
    post: Post,
}

const StoryDetail:React.FC<StoryDetailProps> = ({post}) => {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
            <Title name={post.title} type='main'  />
            <Text content={post.content} type='main' />
            </div>
            <AuthorInfo author={post.author} timestamp={post.timeStamp} />
        </section>
    );
};

export default StoryDetail;