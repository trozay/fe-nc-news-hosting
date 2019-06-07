import React, { Component } from 'react';
import getArticles from '../../api';
import RenderArticles from './renderArticles';

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
    const { loggedInUser, author, query } = this.props;
    return (
      <RenderArticles maxPages={maxPage} changePage={this.changePage} filterItems={this.props.filterItems} articles={articles} loggedInUser={loggedInUser} title={`${author}s Articles`} query={query} />
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
