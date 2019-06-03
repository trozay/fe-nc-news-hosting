import React from 'react';
import { Link } from '@reach/router'
import AddArticle from './addArticle';

export class ArticleList extends React.Component {
  render() {
    return (
      <div className='articleInput'>
        <AddArticle />

        <ul>
          {
            this.props.articles.map(article => {
              return (
                <li key={article.article_id} className='articleCard'>
                  <div>
                    <Link to={`/articles/${article.article_id}`}><h4>{article.title}</h4></Link>
                    <Link to={`/articles/author/${article.author}`}><h6>Author: {article.author}</h6></Link>
                    <h6>Votes: {article.votes}</h6>
                    <h6>Comments: {article.comment_count}</h6>
                    {this.props.loggedInUser && <div>
                      <p onClick={this.props.handleVoteClick}>↑</p>
                      <p onClick={this.props.handleVoteClick}>↓</p>
                    </div>}
                    <p>{article.created_at}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


export default ArticleList;