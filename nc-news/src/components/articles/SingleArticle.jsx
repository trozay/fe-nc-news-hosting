import React, { Component, Fragment } from 'react'
import { getSingleArticle, getCommentsByArticle } from '../../api';
import CommentList from '../comments/commentList'
import AddComment from '../comments/addComment';
import ShowSingleArticle from './showSingleArticle';
import SortByComments from '../sorting/SortByComments';
import { deleteComment } from '../../api';
import { navigate } from '@reach/router'

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
        <SortByComments filterArticles={this.props.filterArticles} />
        <ul>
          {comments && <CommentList comments={comments} loggedInUser={loggedInUser} handleDelete={this.handleDelete} />}
        </ul>
      </div>
    )
  };

  handleDelete = id => {
    deleteComment(id)
      .then(deletedComment => {
        navigate(`/articles/${this.props.id}`, {
          state: { deletedUser: true }
        });
      })
      .catch(console.dir)
  };
};

export default SingleArticle;