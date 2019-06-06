import React, { Component, Fragment } from 'react'
import { getSingleArticle, getCommentsByArticle } from '../../api';
import CommentList from '../comments/commentList'
import AddComment from '../comments/addComment';
import ShowSingleArticle from './showSingleArticle';
import SortByComments from '../sorting/SortByComments';
import { deleteComment, postComment } from '../../api';
import Error from '../pages/Error';

class SingleArticle extends Component {
  state = {
    article: null,
    comments: null,
    err: null
  };

  componentDidMount() {
    const { query } = this.props;
    getSingleArticle(this.props.id)
      .then(article => {
        return Promise.all([article, getCommentsByArticle(this.props.id, { sort_by: query })])
      })
      .then(([article, comments]) => {
        this.setState({ article, comments })
      })
      .catch((err) => this.setState({ err: { errMsg: 'Article Not Found', errStatus: 404 } }))
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      getSingleArticle(this.props.id)
        .then(article => {
          return Promise.all([article, getCommentsByArticle(this.props.id, { sort_by: this.props.query })])
        })
        .then(([article, comments]) => {
          this.setState({ article, comments })
        });
    };
  };

  render() {
    const { article, comments, err } = this.state;
    const { loggedInUser } = this.props;
    if (err) return <Error err={err} />
    return (
      <div>
        {this.props.location.state && this.props.location.state.newArticle && <h4>Article Added!</h4>}
        {article && <ShowSingleArticle articles={[article]} loggedInUser={loggedInUser} />}
        <h3>Comments</h3>
        {loggedInUser && <Fragment>
          <AddComment id={this.props.id} loggedInUser={loggedInUser} handlePostComment={this.handlePostComment} />
        </Fragment>}
        <SortByComments filterArticles={this.props.filterArticles} />
        <ul>
          {comments && <CommentList comments={comments} loggedInUser={loggedInUser} handleDelete={this.handleDelete} />}
        </ul>
      </div>
    )
  };

  handleDelete = id => {
    deleteComment(id)
    const updatedComments = this.state.comments.filter(comment => comment.comment_id !== id)
    const updatedArticle = this.state.article
    updatedArticle.comment_count = updatedComments.length;
    this.setState({ comments: updatedComments, article: updatedArticle })
  };

  handlePostComment = props => {
    postComment(props)
      .then((comment) => {
        this.setState({ comments: [comment, ...this.state.comments] });
      })
      .catch(err => this.setState({ errMsg: err }))
  };

};

export default SingleArticle;