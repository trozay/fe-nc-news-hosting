import React, { Component } from 'react'
import ArticleList from './articles/articleList';
import { getArticles } from '../api';

class Home extends Component {

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
        {articles && <ArticleList articles={articles} loggedInUser={this.props.loggedInUser} handleVoteClick={this.handleVoteClick} />}
      </div>
    )
  }

  handleVoteClick = props => {
    console.log('hello')
  };

};

export default Home;