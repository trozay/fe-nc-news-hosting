import React from 'react';
import Header from './components/header';
import Home from './components/pages/home';
import ArticlesByTopics from './components/articles/ArticlesByTopics';
import SingleArticle from './components/articles/SingleArticle';
import ArticleByAuthor from './components/articles/ArticleByAuthor';
import AddArticle from './components/articles/addArticle';
import About from './components/pages/About';
import Error from './components/pages/Error'
import { getUser } from './api';
import { Router, Link } from '@reach/router';
import './App.css';
import Topics from './components/pages/topics'
class App extends React.Component {
  state = {
    loggedInUser: null,
    query: 'votes',
    err: null
  };

  componentDidMount() {
    const userLoggedIn = localStorage.getItem('user') || {
      username: 'jessjelly',
      name: 'Jess Jelly',
      avatar_url: 'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
    };
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
        localStorage.setItem('user', user);
        this.setState({ loggedInUser: user, err: null })
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
