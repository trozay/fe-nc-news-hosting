import React from 'react';
import ArticleCard from './articleCard'

const ArticleList = props => {
  const { articles, loggedInUser } = props;
  return (
    <ul className='container articlesContainer'>
      {
        articles.map(article => {
          return <ArticleCard article={article} loggedInUser={loggedInUser} key={article.article_id} />
        })
      }
    </ul>
  )

};


export default ArticleList;