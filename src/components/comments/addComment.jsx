import React, { Component } from 'react'
import AddCommentForm from './AddCommentForm';

class AddComment extends Component {
  state = {
    body: '',
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
      </div>
    )
  }

  handleInput = e => {
    this.setState({ [e.target.className]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { body } = this.state;
    const { loggedInUser, id } = this.props;
    this.setState({ body: '' })
    this.props.handlePostComment({ username: loggedInUser, body, id });
  };
}

export default AddComment;