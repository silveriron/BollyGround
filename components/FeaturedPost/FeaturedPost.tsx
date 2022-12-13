import Link from 'next/link';
import React from 'react';
import { Post } from '../../constants/type';

import Image from '../Image/Image';
import Text from '../Text/Text';
import Title from '../Title/Title';
import styles from './FeaturedPost.module.css'

const FeaturedPost:React.FC<Post> = ({title, desc, thumbnail, timeStamp, _id}) => {
    return (
            <Link href={`/story/${_id}`}>
        <div className={styles.container}>
                <Image alt={title} height={340} width={420} src={thumbnail}/>
                <Title name={title} type="sub" />
                <Text content={desc} type="sub" />
                <Text content={timeStamp} type="sub"/>
        </div>
            </Link>
    );
};

export default FeaturedPost;