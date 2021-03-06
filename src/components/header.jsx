import React, { Component } from 'react'
import { Link } from '@reach/router'
import LoginBar from './login/LoginBar';
import SignOut from './login/SignOut';

class Header extends Component {
  state = {
    user: null
  };

  render() {
    const { loggedInUser } = this.props
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/'><h1>NC News</h1></Link>
        <div className='headerLinks'>
          {this.props.err && <h4 className='loginError'>Invalid Username</h4>}
          {loggedInUser && <Link to={`/articles/author/${loggedInUser}`}><h4 className='loggedInUser'>{loggedInUser}</h4></Link>}
          {!loggedInUser ? <LoginBar handleLogin={this.props.handleLogin}
            handleInput={this.props.handleInput} loggedInUser={loggedInUser} /> : <SignOut signOut={this.props.signOut} />}
          <div className='headerTabs'>
            {loggedInUser && <Link to='/addArticle' ><button className='btn btn-outline-primary btn-sm'>Add Article</button></Link>}
            <Link to='/about'><button className='btn btn-outline-primary btn-sm about-link'>About</button></Link>
            <Link to='/topics'><button className='topicsHeader btn btn-outline-primary btn-sm dontDisplay'>Topics</button></Link>
            <Link to='/authors'><button className='btn btn-outline-primary btn-sm dontDisplay'>Authors</button></Link>
          </div>
        </div>
      </nav>
    )
  }
};

export default Header;
