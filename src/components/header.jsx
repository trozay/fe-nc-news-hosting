import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from '@reach/router'
import LoginBar from './login/LoginBar';
import SignOut from './login/SignOut';

class Header extends Component {
  state = {
    topics: null,
    errMsg: null
  };

  componentDidMount() {
    const url = 'https://new-nc-app.herokuapp.com/api/topics';
    Axios.get(url)
      .then(({ data }) => {
        this.setState({ topics: data.topics })
      });
  };

  render() {
    const { topics } = this.state;
    const { loggedInUser } = this.props
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <Link to='/'><h1>NC News</h1></Link>
        <Link to='/about'><button className='btn btn-primary btn-sm'>About</button></Link>
        <h6>Topics</h6>
        <ul className='nav nav-tabs topic-nav'>
          {topics && topics.map((topic, i) => {
            return <Link to={`/${topic.slug}/articles`} key={topic.slug}><li className='nav-item'><button className='btn btn-primary btn-sm'>{topic.slug}</button></li></Link>
          })}
        </ul>
        <div className='form-inline login'>
          {loggedInUser && <Link to={`/articles/author/${loggedInUser}`}><h4>{loggedInUser}</h4></Link>}
          {!loggedInUser ? <LoginBar handleLogin={this.props.handleLogin}
            handleInput={this.props.handleInput} /> : <SignOut signOut={this.props.signOut} />}
          {this.props.err && <h4>Invalid Username</h4>}
          {loggedInUser && <Link to='/addArticle' ><button className='btn btn-primary btn-sm'>Add Article</button></Link>}
        </div>
      </nav>
    )
  }
};

export default Header;
