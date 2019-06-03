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
    loggedInUser: null
  }

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header filterArticles={this.filterArticles} loggedInUser={loggedInUser} />

        {!loggedInUser ? <LoginBar handleLogin={this.handleLogin}
          handleInput={this.handleInput} /> : <SignOut signOut={this.signOut} />}

        <Router>
          <Home path='/' loggedInUser={loggedInUser} />
          <ArticlesByTopics path='/:topic/articles' loggedInUser={loggedInUser} />
          <ArticleByAuthor path='/articles/author/:author' loggedInUser={loggedInUser} />
          <SingleArticle path='/articles/:id' loggedInUser={loggedInUser} />
        </Router>
      </div>
    );
  }

  filterArticles = props => {
    // this.setState({  })
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
    this.setState({ loggedInUser: null });
  };
}

export default App;
