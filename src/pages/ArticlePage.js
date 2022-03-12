import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articleData from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvoteSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = () => {
    const params = useParams();
    const article = articleData.find(article => article.name === params.name );

    const [ articleInfo, setArticleInfo ] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch(`/api/articles/${ params.name }`);
            const body = await result.json();
            setArticleInfo(body);
        };
        fetchData();
        //setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) });
    }, [params.name]);
    // learn-react
    if(!article) return (<NotFoundPage />)

    const otherArticles = articleData.filter(singleArticle => singleArticle.name !== article.name);

    return (
        <React.Fragment>
            <h1>{ article.title }</h1>  
            <UpvoteSection articleName={params.name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>   
            { article.content.map((paragraph, key) =>{
                return (
                    <p key={key}>{paragraph}</p>
                )
            }) }   
            <AddCommentForm articleName={params.name} setArticleInfo={setArticleInfo}/>
            <CommentsList comments={articleInfo.comments} />
            
            <h2>Other Related Articles</h2>
            <ArticlesList articles={ otherArticles }/>    
        </React.Fragment>
    );
};

export default ArticlePage;

