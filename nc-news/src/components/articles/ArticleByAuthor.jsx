import React, { Component } from 'react';
import getArticles from '../../api';
import ArticleList from './articleList'
import SortByArticle from '../sorting/sortByArticle';
import PageButtons from '../pageButtons';

class ArticleByAuthor extends Component {
  state = {
    author: null,
    articles: null,
    p: 1,
    maxPage: null
  };

  componentDidMount() {
    const { query } = this.props;
    const { p } = this.state;
    this.fetchArticlesByAuthor({ sort_by: query, author: this.props.author, p })
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { p } = this.state;
    if (prevProps.author !== this.props.author || prevProps.query !== query || prevState.p !== p) {
      this.fetchArticlesByAuthor({ sort_by: query, author: this.props.author, p });
    };
  };

  render() {
    const { articles, maxPage } = this.state;
    const { loggedInUser, author } = this.props;
    return (
      <div>
        <PageButtons maxPages={maxPage} changePage={this.changePage} />
        <SortByArticle filterArticles={this.props.filterArticles} />
        <h2>{author}'s Articles</h2>
        {articles && <ArticleList articles={articles} loggedInUser={loggedInUser} />}
      </div>
    )
  }

  fetchArticlesByAuthor = (query) => {
    getArticles(query)
      .then(([articles, maxPage]) => {
        this.setState({ articles, author: this.props.author, maxPage: Math.ceil(maxPage / 10) })
      });
  };

  changePage = (pageNum) => {
    this.setState({ p: pageNum });
  };
};

export default ArticleByAuthor;
