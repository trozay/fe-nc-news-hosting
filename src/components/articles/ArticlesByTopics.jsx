import React, { Component } from 'react'
import getArticles from '../../api';
import RenderArticles from './renderArticles'

class ArticlesByTopics extends Component {
  state = {
    articles: null,
    maxPage: null,
    p: 1
  }

  componentDidMount() {
    const { query } = this.props;
    const { p } = this.state;
    this.fetchArticlesByTopic({ sort_by: query, topic: this.props.topic, p });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, topic } = this.props;
    const { p } = this.state;
    if (prevProps.topic !== topic || prevProps.query !== query || prevState.p !== p) {
      this.fetchArticlesByTopic({ sort_by: query, topic, p })
    };
  };

  render() {
    const { articles, maxPage } = this.state;
    const { loggedInUser, query } = this.props;
    return (
      <RenderArticles maxPages={maxPage} changePage={this.changePage} filterItems={this.props.filterItems} articles={articles} loggedInUser={loggedInUser} title={`Topic: ${this.props.topic}`} query={query} />
    )
  };

  fetchArticlesByTopic = (query) => {
    getArticles(query)
      .then(([articles, maxPage]) => {
        this.setState({ articles, maxPage: Math.ceil(maxPage / 10) })
      })
  };

  changePage = (pageNum) => {
    this.setState({ p: pageNum });
  };
};

export default ArticlesByTopics;