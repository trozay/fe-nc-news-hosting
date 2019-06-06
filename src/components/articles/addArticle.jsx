import React, { Component, Fragment } from 'react'
import AddArticleForm from './AddArticleForm';
import { getUser, postArticle } from '../../api';
import { navigate } from '@reach/router';
import Error from '../pages/Error';

class AddArticle extends Component {
  state = {
    usernameInput: null,
    articleTitleInput: null,
    bodyInput: null,
    topicInput: null,
    err: null,
  };

  render() {
    const { err } = this.state;
    return (
      <Fragment>
        <AddArticleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {err && <Error err={err} />}
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
      .catch((err) => {
        this.setState({ err: { errMsg: 'Topic not found', errStatus: 404 } })
      });
  };
};


export default AddArticle;