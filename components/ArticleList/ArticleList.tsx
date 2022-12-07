import React from 'react';

import ArticleItem from '../ArticleItem/ArticleItem';
import styles from './ArticleList.module.css'
import {Article} from '../../constants/type'

interface ArticleListProps {
    articles: Article[];
}

const ArticleList:React.FC<ArticleListProps> = ({articles}) => {
    const style = articles.length > 3 ? {maxWidth: 760} : {maxWidth: 460}
    return (
        <ul className={styles.container} style={style}>
            {articles.map((article) => <ArticleItem key={article.title} {...article} />)}
        </ul>
    );
};

export default ArticleList;