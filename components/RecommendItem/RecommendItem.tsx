import React from 'react';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Title from '../Title/Title';

import styles from './RecommendItem.module.css'
import {Article} from '../../constants/type'

const RecommendItem: React.FC<Article> = ({title, thumbnail, timeStamp}) => {
    return (
        <li className={styles.container}>
            <Image alt={title} height={100} width={100} src={thumbnail} />
            <div className={styles.textContainer}>
            <Title name={title} type='sub' />
            <Text content={timeStamp} type='sub' />
            </div>
        </li>
    );
};

export default RecommendItem;