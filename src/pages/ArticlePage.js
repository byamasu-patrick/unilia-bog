import React from 'react';
import { useParams } from 'react-router-dom';
import articleData from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlePage = () => {

    const params = useParams();
    const article = articleData.find(article => article.name === params.name )
    // learn-react
    if(!article) return (<h1>Article doesn't exist</h1>)

    const otherArticles = articleData.filter(singleArticle => singleArticle.name !== article.name);

    return (
        <React.Fragment>
            <h1>{ article.title }</h1>     
            { article.content.map((paragraph, key) =>{
                return (
                    <p key={key}>{paragraph}</p>
                )
            }) }   
            <h1>Related Articles</h1>
            <ArticlesList articles={ otherArticles }/>    
        </React.Fragment>
    );
};

export default ArticlePage;

