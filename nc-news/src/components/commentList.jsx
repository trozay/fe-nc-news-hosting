import React from 'react'

const CommentList = props => {
  return <ul> {props.comments.map(comment => {
    return <li key={comment.comment_id}>
      <div>
        <p>{comment.body}</p>
        <h6>{comment.author}</h6>
        <h6>{comment.votes}</h6>
        {props.loggedInUser && <div>
          <p>↑</p>
          <p>↓</p>
        </div>}
      </div>
    </li>
  })}
  </ul>
};

export default CommentList;
