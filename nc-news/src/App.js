import React from 'react';
import Header from './components/header';
import Home from './components/home';
import ArticlesByTopics from './components/articles/ArticlesByTopics';
import SingleArticle from './components/articles/SingleArticle';
import ArticleByAuthor from './components/articles/ArticleByAuthor';
import { Router } from '@reach/router';
import './App.css';

class App extends React.Component {
  state = {
    sort_by: null,
    votes: null,
    comment_count: null,
    created_at: null,
  }

  filterArticles = props => {
    // this.setState({  })
  };

  render() {
    return (
      <div className="App">
        <Header filterArticles={this.filterArticles} />
        <Router>
          <Home path='/' />
          <ArticlesByTopics path='/:topic/articles' />
          <SingleArticle path='/articles/:id' />
          <ArticleByAuthor path='/articles/author/:author' />
        </Router>
      </div>
    );
  }
}

export default App;
