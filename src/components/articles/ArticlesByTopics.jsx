import React, { Component } from 'react'
import ArticleList from './articleList';
import getArticles from '../../api';
import SortByArticle from '../sorting/sortByArticle';
import PageButtons from '../pageButtons';

class ArticlesByTopics extends Component {
  state = {
    topic: this.props.topic,
    articles: null,
    maxPage: null,
    p: 1
  }

  componentDidMount() {
    const { query } = this.props;
    const { p } = this.state;
    this.fetchArticlesByTopic({ sort_by: query, topic: this.state.topic, p });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { p } = this.state;
    if (prevProps.topic !== this.props.topic || prevProps.query !== query || prevState.p !== p) {
      this.fetchArticlesByTopic({ sort_by: query, topic: this.state.topic, p })
    };
  };

  render() {
    const { articles, maxPage } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <PageButtons maxPages={maxPage} changePage={this.changePage} />
        <h3>Topic: {this.state.topic}</h3>
        <SortByArticle filterArticles={this.props.filterArticles} />
        <ul>
          {articles && <ArticleList articles={articles} loggedInUser={loggedInUser} />}
        </ul>
      </div>
    )
  }

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