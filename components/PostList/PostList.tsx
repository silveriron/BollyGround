import React from 'react';

import PostItem from '../PostItem/PostItem';
import styles from './PostList.module.css'
import {Post} from '../../constants/type'

interface PostListProps {
    posts: Post[];
    size: "large" | 'nomal' 
}

const PostList:React.FC<PostListProps> = ({posts, size}) => {
    const style = size === "large" ? {maxWidth: 560} : {maxWidth: 460}
    return (
        <ul className={styles.container} style={style}>
            {posts.map((post) => <PostItem key={post.title} {...post} />)}
        </ul>
    );
};

export default PostList;