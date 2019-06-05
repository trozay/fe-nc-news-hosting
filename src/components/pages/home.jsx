import React, { Component } from 'react'
import ArticleList from '../articles/articleList';
import { getArticles } from '../../api';
import SortByArticle from '../sorting/sortByArticle';
import PageButtons from '../pageButtons';

class Home extends Component {
  state = {
    articles: null,
    p: 1,
    maxPage: null
  };

  componentDidMount() {
    const { query } = this.props;
    this.fetchArticles({ sort_by: query })
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { p } = this.state;
    if (prevProps.query !== query || prevState.p !== p) {
      this.fetchArticles({ sort_by: query, p })
    };
  };

  render() {
    const { articles, maxPage } = this.state;
    return (
      <div>
        <PageButtons maxPages={maxPage} changePage={this.changePage} />
        <h3>Most Popular</h3>
        <SortByArticle filterArticles={this.props.filterArticles} />
        {articles && <ArticleList articles={articles} loggedInUser={this.props.loggedInUser} />}
      </div>
    )
  };

  fetchArticles = (query) => {
    getArticles(query)
      .then(([articles, total_count]) => this.setState({ articles, maxPage: Math.ceil(total_count / 10) }))
  };

  changePage = (pageNum) => {
    this.setState({ p: pageNum });
  };
};

export default Home;