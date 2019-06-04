import React, { Component } from 'react'
import { Link } from '@reach/router'
import VoteButtons from '../votes/VoteButtons';
import { updateCommentVote } from '../../api';

class CommentList extends Component {
  render() {
    const { loggedInUser } = this.props;
    return <ul> {
      this.props.comments.map(comment => {
        let canDelete = false;
        return <li key={comment.comment_id}>
          <div className='card'>
            <Link to={`/articles/author/${comment.author}`}><h6 className='card-header'>Author: {comment.author}</h6></Link>
            <p className='card-body'>{comment.body}</p>
            <h6>Votes: {comment.votes}</h6>
            {loggedInUser && <VoteButtons
              handleVoteClick={this.handleVoteClick} id={comment.comment_id} />}
            <h6>{comment.created_at}</h6>
            {comment.author === loggedInUser ? canDelete = true : null}
            {canDelete && <h4 onClick={() => this.props.handleDelete(comment.comment_id)}>Delete</h4>}
          </div>
        </li>
      })
    }
    </ul>
  }

  handleVoteClick = props => {
    updateCommentVote(props)
      .then(updatedVote => {
        console.log(updatedVote);
      })
      .catch(console.dir);
  };
};

export default CommentList;
