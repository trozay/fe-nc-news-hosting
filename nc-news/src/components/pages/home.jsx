import React, { Component } from 'react'
import ArticleList from '../articles/articleList';
import { getArticles } from '../../api';
import SortByArticle from '../sorting/sortByArticle';

class Home extends Component {
  state = {
    articles: null
  };

  componentDidMount() {
    const { query } = this.props;
    getArticles({ sort_by: query })
      .then(articles => this.setState({ articles }))
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    if (prevProps.query !== query) {
      getArticles({ sort_by: query })
        .then(articles => this.setState({ articles }))
    }
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <SortByArticle filterArticles={this.props.filterArticles} />
        <h3>Most Popular</h3>
        {articles && <ArticleList articles={articles} loggedInUser={this.props.loggedInUser} />}
      </div>
    )
  }
};

export default Home;