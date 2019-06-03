import React, { Component, Fragment } from 'react'
import AddArticleForm from './AddArticleForm';
import { getUser, postArticle } from '../../api';

class AddArticle extends Component {
  state = {
    usernameInput: null,
    articleTitleInput: null,
    bodyInput: null,
    topicInput: null,
    errMsg: null,
    successMsg: null
  };

  render() {
    const { successMsg, errMsg } = this.state;
    console.log(successMsg)
    return (
      <Fragment>
        <AddArticleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {errMsg && <h2>{errMsg}</h2>}
        {successMsg && <div>
          <h3>Article added by {successMsg.author}</h3>
          <h5>{successMsg.title}</h5>
          <h5>{successMsg.topic}</h5>
        </div>}
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
        console.log('article', article.author)
        this.setState({
          successMsg: {
            title: article.title,
            author: article.author,
            topic: article.topic
          },
          usernameInput: null,
          articleTitleInput: null,
          bodyInput: null,
          topicInput: null,
          errMsg: null
        });
      })
      .catch(this.setState({ errMsg: 'Invalid Input', successMsg: null }));
  };
};


export default AddArticle;