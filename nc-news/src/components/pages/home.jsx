import React, { Component } from 'react'
import ArticleList from '../articles/articleList';
import { getArticles } from '../../api';

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
        <h3>Most Popular</h3>
        {articles && <ArticleList handleVoteClick={this.handleVoteClick} articles={articles} loggedInUser={this.props.loggedInUser} />}
      </div>
    )
  }

  handleVoteClick = props => {
    console.log('hello')
  };

};

export default Home;