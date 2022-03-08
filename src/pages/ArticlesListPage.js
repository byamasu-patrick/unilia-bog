import React from 'react';
import articleData from './article-content';
import ArticleList from '../components/ArticlesList';

const ArticlesListPage = () => {
    return (
        <React.Fragment>
            <h1>Articles</h1>  
            <ArticleList articles = { articleData } />       
        </React.Fragment>
    );
};

export default ArticlesListPage;

