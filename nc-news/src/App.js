import React from 'react';
import Header from './components/header';
import Home from './components/pages/home';
import ArticlesByTopics from './components/articles/ArticlesByTopics';
import SingleArticle from './components/articles/SingleArticle';
import ArticleByAuthor from './components/articles/ArticleByAuthor';
import AddArticle from './components/articles/addArticle';
import LoginBar from './components/login/LoginBar';
import SignOut from './components/login/SignOut'
import { getUser } from './api';
import { Router, Link } from '@reach/router';
import './App.css';

class App extends React.Component {
  state = {
    loggedInUser: null,
    errMsg: null,
    query: undefined
  }

  componentDidMount() {
    const userLoggedIn = localStorage.getItem('username') || null;
    this.setState({ loggedInUser: userLoggedIn });
  };

  render() {
    const { loggedInUser, query, errMsg } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={loggedInUser} />

        {!loggedInUser ? <LoginBar handleLogin={this.handleLogin}
          handleInput={this.handleInput} /> : <SignOut signOut={this.signOut} />}
        {errMsg && <h4>{errMsg}</h4>}

        {loggedInUser && <Link to='/addArticle' ><button className='btn btn-primary'>Add Article</button></Link>}

        <Router>
          <Home path='/' loggedInUser={loggedInUser} query={query} filterArticles={this.filterArticles} />
          <ArticlesByTopics path='/:topic/articles' loggedInUser={loggedInUser} query={query} filterArticles={this.filterArticles} />
          <ArticleByAuthor path='/articles/author/:author' loggedInUser={loggedInUser} query={query} filterArticles={this.filterArticles} />
          <SingleArticle path='/articles/:id' loggedInUser={loggedInUser} filterArticles={this.filterArticles} />
          <AddArticle path='/addArticle' loggedInUser={loggedInUser} />
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


  handleLogin = (username) => {
    getUser(username)
      .then(user => {
        localStorage.setItem('username', username);
        this.setState({ loggedInUser: user.username, errMsg: null })
      })
      .catch(err => {
        this.setState({ loggedInUser: null, errMsg: `${err.response.status} - ${err.response.data.msg}` })
      })
  };

  signOut = props => {
    this.setState({ loggedInUser: null, usernameInput: null });
  };
}

export default App;
