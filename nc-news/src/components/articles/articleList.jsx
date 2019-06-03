import React from 'react';
import { Link } from '@reach/router'

export const ArticleList = props => {
  return <ul>
    {props.articles.map(article => {
      return (
        <li key={article.article_id} className='articleCard'>
          <div>
            <Link to={`/articles/${article.article_id}`}><h4>{article.title}</h4></Link>
            <Link to={`/articles/author/${article.author}`}><h6>Author: {article.author}</h6></Link>
            <h6>Votes: {article.votes}</h6>
            <h6>Comments: {article.comment_count}</h6>
          </div>
        </li>
      )
    })}
  </ul>
}


export default ArticleList;