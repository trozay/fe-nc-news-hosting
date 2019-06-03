import React, { Component } from 'react'
import ArticleList from './articleList';
import { getArticles } from '../../api';

class Articles extends Component {
  state = {
    articles: null
  };

  componentDidMount() {
    getArticles({ sort_by: 'comment_count' })
      .then(articles => this.setState({ articles }))
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h3>Most Popular</h3>
        {articles && <ArticleList articles={articles} />}
      </div>
    )
  }
};

export default Articles;