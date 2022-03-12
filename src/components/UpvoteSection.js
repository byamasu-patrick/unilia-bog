import React from "react";

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
    
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'POST',
        });
        const body = await result.json();
        setArticleInfo(body);
    }

    return (
        <React.Fragment>
            <button onClick={() => upvoteArticle() }>Add Upvote</button>
            <p>This post has been upvoted { upvotes } times</p>
        </React.Fragment>
    );
}

export default UpvoteSection;