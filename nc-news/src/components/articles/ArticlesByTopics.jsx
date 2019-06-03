import React, { Component } from 'react'
import ArticleList from './articleList';
import getArticles from '../../api';

class ArticlesByTopics extends Component {
  state = {
    topic: this.props.topic,
    articles: null
  }

  componentDidMount() {
    getArticles({ topic: this.props.topic })
      .then(articles => this.setState({ articles }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      getArticles({ topic: this.props.topic })
        .then(articles => this.setState({ articles, topic: this.props.topic }));
    };
  };

  render() {
    const { articles } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <h5>{this.state.topic}</h5>
        <ul>
          {articles && <ArticleList articles={articles} loggedInUser={loggedInUser} />}
        </ul>
      </div>
    )
  }
};

export default ArticlesByTopics;