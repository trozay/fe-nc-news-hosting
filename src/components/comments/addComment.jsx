import React, { Component } from 'react'
import AddCommentForm from './AddCommentForm';

class AddComment extends Component {
  state = {
    body: null,
    successMsg: null,
    errMsg: null
  };

  render() {
    const { errMsg, username, body } = this.state;
    return (
      <div>
        <h5>Add Comment</h5>
        {<AddCommentForm onChange={this.handleInput} onSubmit={this.handleSubmit} body={body} username={username} />}
        {errMsg && <h4>{errMsg}</h4>}
        {/* {successMsg && <h4>{successMsg}</h4>} */}
      </div>
    )
  }

  handleInput = e => {
    this.setState({ [e.target.className]: e.target.value });
  };

  handleSubmit = e => {
    const { body } = this.state;
    const { loggedInUser, id } = this.props;
    e.preventDefault();
    this.props.handlePostComment({ username: loggedInUser, body, id });
  };
}

export default AddComment;