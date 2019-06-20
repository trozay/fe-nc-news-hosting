import React, { Component } from 'react'
import { deleteComment, postComment } from '../../api'
import AddComment from '../comments/addComment'
import SortBy from '../sorting/SortBy'
import CommentList from '../comments/commentList'
import { getCommentsByArticle } from '../../api'

export default class Comments extends Component {
  state = {
    comments: null
  };

  componentDidMount() {
    const { query } = this.props;
    getCommentsByArticle(this.props.id, { sort_by: query })
      .then(comments => this.setState({ comments }))
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    if (prevProps.query !== query) {
      getCommentsByArticle(this.props.id, { sort_by: query })
        .then(comments => this.setState({ comments }));
    };
  };

  render() {
    const { loggedInUser, id, filterItems, query } = this.props;
    const { comments } = this.state;
    return (
      <div>
        {comments && comments.length !== 0 && <h3>Comments</h3>}
        {comments && comments.length === 0 && <h3>Be the first to comment on this article!</h3>}
        {loggedInUser && <AddComment id={id} loggedInUser={loggedInUser} handlePostComment={this.handlePostComment} />}
        {comments && comments.length !== 0 && <SortBy filterItems={filterItems} query={query} columnsToSort={['votes', 'created at']} />}
        {comments && <CommentList comments={comments} loggedInUser={loggedInUser} handleCommentDelete={this.handleCommentDelete} />}
      </div>
    )
  }

  handlePostComment = props => {
    postComment(props)
      .then((comment) => {
        this.setState({ comments: [comment, ...this.state.comments] });
      })
      .catch(err => this.setState({ errMsg: err }))
  };

  handleCommentDelete = id => {
    deleteComment(id)
    const updatedComments = this.state.comments.filter(comment => comment.comment_id !== id)
    this.setState({ comments: updatedComments })
  };
};
