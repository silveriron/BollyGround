import React from "react";

import RecommendItem from "../RecommendItem/RecommendItem";
import Title from "../Title/Title";
import styles from "./RecommendStory.module.css";
import { Post } from "../../constants/type";

interface RecommendStoryProps {
  posts: Post[];
}

const RecommendStory: React.FC<RecommendStoryProps> = ({ posts }) => {
  return (
    <aside className={styles.container}>
      <Title name="Recommend" type="main" />
      <ul>
        {posts.map((post) => (
          <RecommendItem key={post.title} {...post} />
        ))}
      </ul>
    </aside>
  );
};

export default RecommendStory;
