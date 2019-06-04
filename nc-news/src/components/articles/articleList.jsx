import React from 'react';
import { Link } from '@reach/router'
import VoteButtons from "../votes/VoteButtons";
import { updateArticleVote } from '../../api'

export class ArticleList extends React.Component {
  render() {
    return (
      <div className='articleInput'>
        <ul>
          {
            this.props.articles.map(article => {
              return (
                <li key={article.article_id} className='card'>
                  <div>
                    <Link to={`/articles/${article.article_id}`}><h4 className='card-title card-header'>{article.title}</h4></Link>
                    <Link to={`/articles/author/${article.author}`}><h6>Author: {article.author}</h6></Link>
                    <h6>Votes: {article.votes}</h6>
                    <h6>Comments: {article.comment_count}</h6>
                    {this.props.loggedInUser && <VoteButtons
                      handleVoteClick={this.handleVoteClick} id={article.article_id} />}
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

  handleVoteClick = props => {
    updateArticleVote(props)
      .then(updatedVote => {
        console.log(this.props.location)
        // navigate(`${this.props.location.pathname}`)
      })
      .catch(console.dir);
  };
};


export default ArticleList;