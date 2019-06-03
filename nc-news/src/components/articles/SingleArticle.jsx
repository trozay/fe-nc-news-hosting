import React, { Component } from 'react'
import { getSingleArticle, getCommentsByArticle } from '../../api';
import { Link } from '@reach/router'

class SingleArticle extends Component {
  state = {
    article: null,
    comments: null
  };
  componentDidMount() {
    getSingleArticle(this.props.id)
      .then(article => {
        return Promise.all([article, getCommentsByArticle(this.props.id)])
      })
      .then(([article, comments]) => {
        this.setState({ article, comments })
      })
  };

  render() {
    const { article, comments } = this.state;
    return (
      <div>
        {article && <div key={article.article_id}>
          <h4>{article.title}</h4>
          <p>{article.body}</p>
          <Link to={`/articles/author/${article.author}`}><h6>Author: {article.author}</h6></Link>
          <h6>Votes: {article.votes}<span role="img">👍</span></h6>
          <h6>Comments: {article.comment_count}</h6>
        </div>}
        <h3>Comments</h3>
        <ul>
          {comments && comments.map(comment => {
            return <li key={comment.comment_id}>
              <div>
                <p>{comment.body}</p>
                <h6>{comment.author}</h6>
                <h6>{comment.votes}</h6>
              </div>
            </li>
          })}
        </ul>
      </div>
    )
  };
};

export default SingleArticle;