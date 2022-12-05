import React from 'react';

import {ArticleItemProps} from '../ArticleItem/ArticleItem'
import Image from '../Image/Image';
import Text from '../Text/Text';
import Title from '../Title/Title';
import styles from './FeaturedArticle.module.css'

const FeaturedArticle:React.FC<ArticleItemProps> = ({title, desc, thumbnail, timeStamp}) => {
    return (
        <div className={styles.container}>
                <Image alt={title} height={340} width={420} src={thumbnail}/>
                <Title name={title} type="sub" />
                <Text content={desc} type="sub" />
                <Text content={timeStamp} type="sub"/>
        </div>
    );
};

export default FeaturedArticle;