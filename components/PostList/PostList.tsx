import React from "react";

import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.css";
import { Post } from "../../constants/type";

interface PostListProps {
  posts: Post[];
  size: "large" | "nomal";
}

const PostList: React.FC<PostListProps> = ({ posts, size }) => {
  const style = size === "large" ? { maxWidth: 560 } : { maxWidth: 460 };

  if (!posts || !posts?.length) {
    return <p className={styles.alert}>글이 없습니다.</p>;
  }
  return (
    <ul className={styles.container} style={style}>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} size={size} />
      ))}
    </ul>
  );
};

export default PostList;
