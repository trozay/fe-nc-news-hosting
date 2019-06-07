import React, { Component } from 'react'
import { getArticles } from '../../api';
import RenderArticles from '../articles/renderArticles';

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
    const { query } = this.props;
    return (
      <RenderArticles maxPages={maxPage} changePage={this.changePage} filterItems={this.props.filterItems} articles={articles} loggedInUser={this.props.loggedInUser} query={query} />
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