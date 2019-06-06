import React, { Component } from 'react'
import CommentCard from './commentCard';

class CommentList extends Component {
  render() {
    const { loggedInUser } = this.props;
    return <ul> {
      this.props.comments.map(comment => {
        return <CommentCard comment={comment} loggedInUser={loggedInUser} key={comment.comment_id} handleCommentDelete={this.props.handleCommentDelete} />
      })
    }
    </ul>
  }
};

export default CommentList;
