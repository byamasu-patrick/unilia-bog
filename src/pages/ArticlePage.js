import React from 'react';
import { useParams } from 'react-router-dom';
import articleData from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {

    const params = useParams();
    const article = articleData.find(article => article.name === params.name )
    // learn-react
    if(!article) return (<NotFoundPage />)

    const otherArticles = articleData.filter(singleArticle => singleArticle.name !== article.name);

    return (
        <React.Fragment>
            <h1>{ article.title }</h1>     
            { article.content.map((paragraph, key) =>{
                return (
                    <p key={key}>{paragraph}</p>
                )
            }) }   
            <h2>Other Related Articles</h2>
            <ArticlesList articles={ otherArticles }/>    
        </React.Fragment>
    );
};

export default ArticlePage;

