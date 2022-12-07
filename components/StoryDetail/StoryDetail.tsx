import React from 'react';

import Text from '../Text/Text';
import Title from '../Title/Title';
import styles from './StoryDetail.module.css'

interface StoryDetailProps {
    title: string,
    content: string
}

const StoryDetail:React.FC<StoryDetailProps> = ({title, content}) => {
    return (
        <section className={styles.container}>
            <Title name={title} type='main'  />
            <Text content={content} type='main' />
        </section>
    );
};

export default StoryDetail;