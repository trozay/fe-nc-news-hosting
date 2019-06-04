import React, { Component } from 'react';
import getArticles from '../../api';
import ArticleList from './articleList'
import SortByArticle from '../sorting/sortByArticle';

class ArticleByAuthor extends Component {
  state = {
    author: null,
    articles: null
  };

  componentDidMount() {
    const { query } = this.props;
    getArticles({ sort_by: query, author: this.props.author })
      .then(articles => this.setState({ articles }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    if (prevProps.author !== this.props.author || prevProps.query !== query) {
      getArticles({ sort_by: query, author: this.props.author })
        .then(articles => this.setState({ articles, author: this.props.author }));
    };
  };

  render() {
    const { articles } = this.state;
    const { loggedInUser, author } = this.props;
    return (
      <div>
        <SortByArticle filterArticles={this.props.filterArticles} />
        <h2>{author}'s Articles</h2>
        {articles && <ArticleList articles={articles} loggedInUser={loggedInUser} />}
      </div>
    )
  }
};

export default ArticleByAuthor;
