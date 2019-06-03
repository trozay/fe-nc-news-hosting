import React, { Component, Fragment } from 'react'
import AddArticleForm from './AddArticleForm';
import { getUser } from '../../api';

class AddArticle extends Component {
  state = {
    usernameInput: null,
    articleTitleInput: null,
    bodyInput: null,
    errMsg: null
  };

  render() {
    return (
      <Fragment>
        <AddArticleForm handleChange={this.handleChange} />
        {this.state.errMsg && <h2>{this.state.errMsg}</h2>}
      </Fragment>
    )
  }

  handleChange = e => {
    this.setState({ [e.target.className]: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();
    getUser()
      .then(user => console.log(user))
      .catch(this.setState({ errMsg: 'Error Invalid Username' }))
  };
};


export default AddArticle;