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
        <div className={styles.container}>
            <div className={styles.textContainer}>
            <Title name={post.title} type='main'  />
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
            </div>
            {/* <AuthorInfo author={post.author} timestamp={post.timeStamp} /> */}
        </div>
    );
};

export default StoryDetail;