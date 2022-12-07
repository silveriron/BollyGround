import React from 'react';

import ArticleItem from '../ArticleItem/ArticleItem';
import styles from './ArticleList.module.css'
import {Article} from '../../constants/type'

interface ArticleListProps {
    articles: Article[];
    size: "large" | 'nomal' 
}

const ArticleList:React.FC<ArticleListProps> = ({articles, size}) => {
    const style = size === "large" ? {maxWidth: 560} : {maxWidth: 460}
    return (
        <ul className={styles.container} style={style}>
            {articles.map((article) => <ArticleItem key={article.title} {...article} />)}
        </ul>
    );
};

export default ArticleList;