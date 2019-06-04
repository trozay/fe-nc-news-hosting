import React from 'react';
import Header from './components/header';
import Home from './components/home';
import ArticlesByTopics from './components/articles/ArticlesByTopics';
import SingleArticle from './components/articles/SingleArticle';
import ArticleByAuthor from './components/articles/ArticleByAuthor';
import LoginBar from './components/login/LoginBar';
import SignOut from './components/login/SignOut'
import { getUser } from './api';
import { Router } from '@reach/router';
import './App.css';

class App extends React.Component {
  state = {
    usernameInput: null,
    loggedInUser: null,
    query: undefined
  }

  render() {
    const { loggedInUser, query } = this.state;
    return (
      <div className="App">
        <Header filterArticles={this.filterArticles} loggedInUser={loggedInUser} />

        {!loggedInUser ? <LoginBar handleLogin={this.handleLogin}
          handleInput={this.handleInput} /> : <SignOut signOut={this.signOut} />}

        <Router>
          <Home path='/' loggedInUser={loggedInUser} query={query} />
          <ArticlesByTopics path='/:topic/articles' loggedInUser={loggedInUser} query={query} />
          <ArticleByAuthor path='/articles/author/:author' loggedInUser={loggedInUser} query={query} />
          <SingleArticle path='/articles/:id' loggedInUser={loggedInUser} />
        </Router>
      </div>
    );
  }

  filterArticles = (queryBy) => {
    switch (queryBy) {
      case 'votes':
        this.setState({ query: 'votes' });
        break;
      case 'comment_count':
        this.setState({ query: 'comment_count' });
        break;
      case 'created_at':
        this.setState({ query: 'created_at' });
        break;
      default:
        break;
    }
  };

  handleInput = e => {
    this.setState({ usernameInput: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();

    getUser(this.state.usernameInput)
      .then(user => {
        this.setState({ loggedInUser: user.name })
      })
      .catch(this.setState({ loggedInUser: null }))
  };

  signOut = props => {
    this.setState({ loggedInUser: null, usernameInput: null });
  };
}

export default App;
