import React, { Component, Fragment } from 'react'
import AddArticleForm from './AddArticleForm';
import { getUser, postArticle } from '../../api';
import { navigate } from '@reach/router';

class AddArticle extends Component {
  state = {
    usernameInput: null,
    articleTitleInput: null,
    bodyInput: null,
    topicInput: null,
    errMsg: null,
  };

  render() {
    const { errMsg } = this.state;
    return (
      <Fragment>
        <AddArticleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {errMsg && <h2>{errMsg}</h2>}
      </Fragment>
    )
  }

  handleChange = e => {
    this.setState({ [e.target.className]: e.target.value })
  };

  handleSubmit = e => {
    const { articleTitleInput, bodyInput, topicInput } = this.state;
    const author = this.props.loggedInUser;

    e.preventDefault();
    getUser(author)
      .then(user => {
        return Promise.all([postArticle({ author, title: articleTitleInput, body: bodyInput, topic: topicInput })])
      })
      .then(([article]) => {
        navigate(`/articles/${article.article_id}`, {
          state: { newArticle: true }
        });
      })
      .catch(err => {
        this.setState({ errMsg: 'Invalid Input' })
      });
  };
};


export default AddArticle;