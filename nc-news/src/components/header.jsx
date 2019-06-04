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
        <h6>Topics</h6>
        <ul className='nav nav-tabs'>
          {topics && topics.map((topic, i) => {
            return <Link to={`/${topic.slug}/articles`}><li key={topic.slug} className='nav-item'><button className='btn btn-primary btn-sm'>{topic.slug}</button></li></Link>
          })}
        </ul>
        <div className='form-inline login'>
          {loggedInUser && <h4>{loggedInUser}</h4>}
          {!loggedInUser ? <LoginBar handleLogin={this.props.handleLogin}
            handleInput={this.props.handleInput} /> : <SignOut signOut={this.props.signOut} />}

          {loggedInUser && <Link to='/addArticle' ><button className='btn btn-primary'>Add Article</button></Link>}
        </div>
      </nav>
    )
  }
};

export default Header;
