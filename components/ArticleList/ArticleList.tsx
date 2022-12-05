import React from 'react';

import ArticleItem, {ArticleItemProps} from '../ArticleItem/ArticleItem';

interface ArticleListProps {
    articles: ArticleItemProps[];
}

const ArticleList:React.FC<ArticleListProps> = ({articles}) => {
    return (
        <ul style={{maxWidth: 460}}>
            {articles.map((article) => <ArticleItem key={article.title} {...article} />)}
        </ul>
    );
};

export default ArticleList;