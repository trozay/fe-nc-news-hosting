import React, { Component } from 'react'
import { Link } from '@reach/router'
import VoteButtons from '../votes/VoteButtons'
import { updateCommentVote } from '../../api'

class CommentCard extends Component {
  state = {
    commentVotes: null
  };

  componentDidMount() {
    this.setState({ commentVotes: this.props.comment.votes })
  };

  render() {
    let canDelete = false;
    const { comment, loggedInUser } = this.props;
    const { commentVotes } = this.state;
    return (
      <div>
        <li>
          <div className='card commentContainer'>
            <Link to={`/articles/author/${comment.author}`}><h6 className='card-header'>Author: {comment.author}</h6></Link>
            <p className='card-body'>{comment.body}</p>
            <h6>Votes: {commentVotes}</h6>
            {loggedInUser && <VoteButtons
              handleVoteClick={this.handleVoteClick} id={comment.comment_id} />}
            <h6>{comment.created_at}</h6>
            {comment.author === loggedInUser ? canDelete = true : null}
            {canDelete && <button className='btn btn-danger btn-sm' onClick={() => this.props.handleCommentDelete(comment.comment_id)}>Delete</button>}
          </div>
        </li>
      </div>
    )
  }

  handleVoteClick = props => {
    updateCommentVote(props)
    this.setState(prevState => {
      return {
        commentVotes: prevState.commentVotes + props.inc_votes
      };
    });
  };
};

export default CommentCard;