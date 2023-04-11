import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    const renderedArticles = posts.map( post =>
        <Article
            {...post}
            key = {post.id}
        />    
        )

    return (
        <main>
            {renderedArticles}
        </main>
    )
}

export default ArticleList;