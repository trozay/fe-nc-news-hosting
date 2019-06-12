import React, { Component, Fragment } from 'react'
import { getArticles } from '../../api';
import RenderArticles from '../articles/renderArticles';
import Loader from 'react-loader-spinner'

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
      <Fragment>
        {!articles && <Loader type="Puff"
          color="#00BFFF"
          height="100"
          width="100" />}
        <RenderArticles maxPages={maxPage} changePage={this.changePage} filterItems={this.props.filterItems} articles={articles} loggedInUser={this.props.loggedInUser} query={query} title={'Most Popular'} />
      </Fragment>
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