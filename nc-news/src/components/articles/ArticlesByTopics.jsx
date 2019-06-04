import React, { Component } from 'react'
import ArticleList from './articleList';
import getArticles from '../../api';
import SortByArticle from '../sorting/sortByArticle';

class ArticlesByTopics extends Component {
  state = {
    topic: this.props.topic,
    articles: null
  }

  componentDidMount() {
    const { query } = this.props;
    getArticles({ sort_by: query, topic: this.state.topic })
      .then(articles => this.setState({ articles }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    if (prevProps.topic !== this.props.topic || prevProps.query !== query) {
      getArticles({ sort_by: query, topic: this.props.topic })
        .then(articles => this.setState({ articles, topic: this.props.topic }));
    };
  };

  render() {
    const { articles } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <SortByArticle filterArticles={this.props.filterArticles} />
        <h5>{this.state.topic}</h5>
        <ul>
          {articles && <ArticleList articles={articles} loggedInUser={loggedInUser} />}
        </ul>
      </div>
    )
  }
};

export default ArticlesByTopics;