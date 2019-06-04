import React from 'react'
import { Link } from '@reach/router'

const CommentList = props => {
  return <ul> {props.comments.map(comment => {
    return <li key={comment.comment_id}>
      <div>
        <p>{comment.body}</p>
        <Link to={`/articles/author/${comment.author}`}><h6>Author: {comment.author}</h6></Link>
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
