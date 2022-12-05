import React from 'react';

import ArticleItem, {ArticleItemProps} from '../ArticleItem/ArticleItem';
import styles from './ArticleList.module.css'

interface ArticleListProps {
    articles: ArticleItemProps[];
}

const ArticleList:React.FC<ArticleListProps> = ({articles}) => {
    return (
        <ul className={styles.container}>
            {articles.map((article) => <ArticleItem key={article.title} {...article} />)}
        </ul>
    );
};

export default ArticleList;