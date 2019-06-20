import React from 'react'
import CommentCard from './commentCard';

const CommentList = props => {
  const { loggedInUser, comments, handleCommentDelete } = props;
  return <ul className='commentList'> {
    comments.map(comment => {
      return <CommentCard comment={comment} loggedInUser={loggedInUser} key={comment.comment_id} handleCommentDelete={handleCommentDelete} />
    })
  }
  </ul>
};

export default CommentList;
