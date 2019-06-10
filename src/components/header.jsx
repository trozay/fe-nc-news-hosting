import React, { Component } from 'react'
import { Link } from '@reach/router'
import LoginBar from './login/LoginBar';
import SignOut from './login/SignOut';

class Header extends Component {
  render() {
    const { loggedInUser } = this.props
    console.log(loggedInUser)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <Link to='/'><h1>NC News</h1></Link>
        <div className='headerPages'>
          {/* <Link to='/about'><button className='btn btn-outline-primary btn-sm about-link'>About</button></Link>
          <Link to='/topics'><button className='topicsHeader btn btn-outline-primary btn-sm dontDisplay'>Topics</button></Link> */}
        </div>
        <div className='form-inline login'>
          {loggedInUser && <Link to={`/articles/author/${loggedInUser.username}`}><img className='loggedInUser' src={loggedInUser.avatar_url} alt={`${loggedInUser.username}`} /></Link>}
          <div className='headerLinks'>
            {!loggedInUser ? <LoginBar handleLogin={this.props.handleLogin}
              handleInput={this.props.handleInput} loggedInUser={loggedInUser} /> : <SignOut signOut={this.props.signOut} />}
            {this.props.err && <h4>Invalid Username</h4>}
            {loggedInUser && <Link to='/addArticle' ><button className='btn btn-outline-primary btn-sm'>Add Article</button></Link>}
            <Link to='/about'><button className='btn btn-outline-primary btn-sm about-link'>About</button></Link>
            <Link to='/topics'><button className='topicsHeader btn btn-outline-primary btn-sm dontDisplay'>Topics</button></Link>
          </div>
        </div>
      </nav>
    )
  }
};

export default Header;
