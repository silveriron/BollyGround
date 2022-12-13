import React from 'react';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Title from '../Title/Title';

import styles from './PostItem.module.css'
import { Post } from '../../constants/type';
import Link from 'next/link';

interface PostItemProps {
    post: Post,
    size? : 'large' | 'nomal'
}


const PostItem:React.FC<PostItemProps> = ({ post, size}) => {
    const {title, desc, thumbnail, timeStamp, _id} = post
    const w = size === 'large' ? 260 : 230
    const h = size === 'large' ? 160 : 160
    return (
        <li className={styles.container}>
            <Link href={`/story/${_id}`}>
            <div className={styles.imageContainer}>
                <Image alt={title} height={h} width={w} src={thumbnail}/>
            </div>
            <div className={styles.textContainer}>
                <Title name={title} type="sub" />
                <Text content={desc} type="sub" />
                <Text content={timeStamp} type="sub"/>
            </div>
            </Link>
        </li>
    );
};

export default PostItem;