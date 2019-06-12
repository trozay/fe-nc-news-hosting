import React, { Component, Fragment } from 'react';
import getArticles, { getTopics } from '../../api';
import RenderArticles from './renderArticles';
import Error from '../pages/Error';
import Loader from 'react-loader-spinner'

class ArticlesByTopics extends Component {
  state = {
    articles: null,
    maxPage: null,
    p: 1,
    err: null
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
    const { articles, maxPage, err } = this.state;
    const { loggedInUser, query } = this.props;
    if (err) return <Error err={err} />
    return (
      <Fragment>
        {!articles && <Loader type="Puff"
          color="#00BFFF"
          height="100"
          width="100" />}
        <RenderArticles maxPages={maxPage} changePage={this.changePage} filterItems={this.props.filterItems} articles={articles} loggedInUser={loggedInUser} title={`Topic: ${this.props.topic}`} query={query} />
      </Fragment>
    )
  };

  fetchArticlesByTopic = (query) => {
    getTopics()
      .then(topics => {
        let indexOfTopic = topics.findIndex(topic => topic.slug === this.props.topic)
        if (indexOfTopic === -1) this.setState({ err: { errMsg: 'Invalid Topic', errStatus: 400 } })
      })
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