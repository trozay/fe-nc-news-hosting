import React from 'react';
import Header from './components/header';
import Home from './components/pages/home';
import ArticlesByTopics from './components/articles/ArticlesByTopics';
import SingleArticle from './components/articles/SingleArticle';
import ArticleByAuthor from './components/articles/ArticleByAuthor';
import AddArticle from './components/articles/addArticle';
import About from './components/pages/About';
import Error from './components/pages/Error';
import { getUser } from './api';
import { Router, Link } from '@reach/router';
import './App.css';
import Topics from './components/pages/topics';
import Authors from './components/pages/Authors';

class App extends React.Component {
  state = {
    loggedInUser: null,
    query: 'votes',
    err: null
  };

  componentDidMount() {
    const userLoggedIn = localStorage.getItem('username')
    this.setState({ loggedInUser: userLoggedIn });
  };

  render() {
    const { loggedInUser, query, err } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={loggedInUser} handleLogin={this.handleLogin}
          handleInput={this.handleInput} signOut={this.signOut} err={err} />
        <div className='mobile-header'>
          <Link to='/about'><button className='btn btn-outline-primary btn-sm'>About</button></Link>
          <Link to='/topics'><button className='btn btn-outline-primary btn-sm'>Topics</button></Link>

        </div>
        <Router>
          <Home path='/' loggedInUser={loggedInUser} query={query} filterItems={this.filterItems} />
          <ArticlesByTopics path='/:topic/articles' loggedInUser={loggedInUser} query={query} filterItems={this.filterItems} />
          <ArticleByAuthor path='/articles/author/:author' loggedInUser={loggedInUser} query={query} filterItems={this.filterItems} />
          <SingleArticle path='/articles/:id' loggedInUser={loggedInUser} filterItems={this.filterItems} query={query} />
          <AddArticle path='/addArticle' loggedInUser={loggedInUser} />
          <About path='/about' />
          <Topics path='/topics' />
          <Authors path='/authors' />
          <Error default />
        </Router>
      </div>
    );
  }

  filterItems = (query) => {
    this.setState({ query })
  };


  handleLogin = (username) => {
    getUser(username)
      .then(user => {
        localStorage.setItem('username', username);
        this.setState({ loggedInUser: username, err: null })
      })
      .catch(err => {
        this.setState({ loggedInUser: null, err })
      })
  };

  signOut = props => {
    this.setState({ loggedInUser: null, usernameInput: null });
  };
}

export default App;
