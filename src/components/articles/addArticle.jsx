import React, { Component } from 'react'
import AddArticleForm from './AddArticleForm';
import { postArticle } from '../../api';
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
      <div>
        <AddArticleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {err && <Error err={err} />}
      </div>
    )
  }

  handleChange = e => {
    this.setState({ [e.target.className]: e.target.value })
  };

  handleSubmit = e => {
    const { articleTitleInput, bodyInput, topicInput } = this.state;
    const author = this.props.loggedInUser;
    e.preventDefault();
    postArticle({ author, title: articleTitleInput, body: bodyInput, topic: topicInput })
      .then((article) => {
        navigate(`/articles/${article.article_id}`, {
          state: { newArticle: true }
        });
      })
      .catch(err => {
        if (err.response.status === 404) this.setState({ err: { errMsg: 'Topic Not found', errStatus: 404 } });
        else this.setState({ err: { errMsg: err, status: err.response.status } })
      });
  };
};


export default AddArticle;