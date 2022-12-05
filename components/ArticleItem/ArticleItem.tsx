import React from 'react';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Title from '../Title/Title';

import styles from './ArticleItem.module.css'

export interface ArticleItemProps {
    title: string,
    desc: string,
    thumbnail: string,
    timeStamp: string,
}

const ArticleItem:React.FC<ArticleItemProps> = ({title, desc, thumbnail, timeStamp}) => {
    return (
        <li className={styles.container}>
            <div className={styles.imageContainer}>
                <Image alt={title} height={160} width={230} src={thumbnail}/>
            </div>
            <div>
                <Title name={title} type="sub" />
                <Text content={desc} type="sub" />
                <Text content={timeStamp} type="sub"/>
            </div>
        </li>
    );
};

export default ArticleItem;