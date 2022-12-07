import React from 'react';
import AuthorInfo from '../AuthorInfo/AuthorInfo';

import Text from '../Text/Text';
import Title from '../Title/Title';
import styles from './StoryDetail.module.css'
import {Article, Author} from '../../constants/type'

interface StoryDetailProps {
    article: Article,
}

const StoryDetail:React.FC<StoryDetailProps> = ({article}) => {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
            <Title name={article.title} type='main'  />
            <Text content={article.content} type='main' />
            </div>
            <AuthorInfo author={article.author} timestamp={article.timeStamp} />
        </section>
    );
};

export default StoryDetail;