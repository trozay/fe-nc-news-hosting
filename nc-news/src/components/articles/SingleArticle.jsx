import React, { Component } from 'react'
import { getSingleArticle, getCommentsByArticle } from '../../api';
import ArticleList from './articleList';
import CommentList from '../commentList'

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
        {article && <ArticleList articles={[article]} />}
        <h3>Comments</h3>
        <ul>
          {comments && <CommentList comments={comments} />}
        </ul>
      </div>
    )
  };
};

export default SingleArticle;