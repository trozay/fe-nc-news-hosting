import React, { Component } from 'react';
import getArticles from '../../api';
import ArticleList from './articleList'

class ArticleByAuthor extends Component {
  state = {
    author: null,
    articles: null
  };

  componentDidMount() {
    getArticles({ author: this.props.author })
      .then(articles => this.setState({ articles, author: this.props.author }));
  };


  render() {
    const { articles, author } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <h2>{author}s Articles</h2>
        {articles && <ArticleList articles={articles} loggedInUser={loggedInUser} />}
      </div>
    )
  }
};

export default ArticleByAuthor;
