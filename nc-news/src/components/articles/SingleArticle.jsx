import React, { Component, Fragment } from 'react'
import { getSingleArticle, getCommentsByArticle } from '../../api';
import CommentList from '../comments/commentList'
import AddComment from '../comments/addComment';
import ShowSingleArticle from './showSingleArticle';

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
    const { loggedInUser } = this.props;
    return (
      <div>
        {loggedInUser && <Fragment>
          <AddComment id={this.props.id} />
        </Fragment>}
        {this.props.location.state && this.props.location.state.newArticle && <h4>Article Added!</h4>}
        {article && <ShowSingleArticle articles={[article]} loggedInUser={loggedInUser} />}
        <h3>Comments</h3>
        <ul>
          {comments && <CommentList comments={comments} loggedInUser={loggedInUser} />}
        </ul>
      </div>
    )
  };
};

export default SingleArticle;