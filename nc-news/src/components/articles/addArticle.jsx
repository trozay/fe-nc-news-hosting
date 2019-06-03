import React, { Component, Fragment } from 'react'
import AddArticleForm from './AddArticleForm';
import { getUser, postArticle } from '../../api';

class AddArticle extends Component {
  state = {
    usernameInput: null,
    articleTitleInput: null,
    bodyInput: null,
    topicInput: null,
    errMsg: null
  };

  render() {
    return (
      <Fragment>
        <AddArticleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {this.state.errMsg && <h2>{this.state.errMsg}</h2>}
      </Fragment>
    )
  }

  handleChange = e => {
    this.setState({ [e.target.className]: e.target.value })
  };

  handleSubmit = e => {
    const { usernameInput, articleTitleInput, bodyInput, topicInput } = this.state
    e.preventDefault();
    getUser(usernameInput)
      .then(user => {
        return Promise.all([postArticle({ author: usernameInput, title: articleTitleInput, body: bodyInput, topic: topicInput })])
      })
      .then(([article]) => {
        console.log('hello')
      })
      .catch(console.log)
  };
};


export default AddArticle;