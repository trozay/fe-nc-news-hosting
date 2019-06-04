import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from '@reach/router'

class Header extends Component {
  state = {
    topics: null
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
      <div className='header'>
        <Link to='/'><h1>NC News</h1></Link>
        {loggedInUser && <h4>{loggedInUser}</h4>}
        <ul className='container'>
          {topics && topics.map((topic, i) => {
            return <Link to={`/${topic.slug}/articles`}><li key={topic.slug}><button className='btn btn-primary'>{topic.slug}</button></li></Link>
          })}
        </ul>
      </div>
    )
  }
};

export default Header;
