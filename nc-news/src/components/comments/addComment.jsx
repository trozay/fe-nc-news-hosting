import React, { Component } from 'react'
import AddCommentForm from './AddCommentForm';
import { postComment } from '../../api';

class AddComment extends Component {
  state = {
    username: null,
    body: null,
    successMsg: null,
    errMsg: null
  };

  render() {
    const { successMsg, errMsg } = this.state;
    return (
      <div>
        <h5>Add Comment</h5>
        {!successMsg && <AddCommentForm onChange={this.handleInput} onSubmit={this.handleSubmit} />}
        {errMsg && <h4>{errMsg}</h4>}
        {successMsg && <h4>{successMsg}</h4>}
      </div>
    )
  }

  handleInput = e => {
    this.setState({ [e.target.className]: e.target.value });
  };

  handleSubmit = e => {
    const { username, body } = this.state;
    const article_id = this.props.id
    e.preventDefault();
    console.log('hello')
    postComment({ username, body, article_id })
      .then((comment) => {
        this.setState({ successMsg: "Comment successfully added" });
      })
      .catch(err => this.setState({ errMsg: err }))
  };
}

export default AddComment;