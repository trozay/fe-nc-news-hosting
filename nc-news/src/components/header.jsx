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
    return (
      <div>
        <Link to='/'><h1>NC News</h1></Link>
        <h4>Topics</h4>
        <ul>
          {topics && topics.map(topic => {
            return <Link to={`/${topic.slug}/articles`}><li>{topic.slug}</li></Link>
          })}
        </ul>
      </div>
    )
  }
};

export default Header;
