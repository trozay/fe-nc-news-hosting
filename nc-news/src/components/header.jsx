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
        {this.props.loggedInUser && <h4>{this.props.loggedInUser}</h4>}
        <h4>Topics</h4>
        <ul>
          {topics && topics.map((topic, i) => {
            return <Link to={`/${topic.slug}/articles`}><li key={topic.slug}>{topic.slug}</li></Link>
          })}
        </ul>
        <h4>Sort By</h4>
        <button onClick={() => this.props.filterArticles('votes')}>Votes</button>
        <button onClick={() => this.props.filterArticles('comment_count')}>Comment Count</button>
        <button onClick={() => this.props.filterArticles('created_at')}>Created At</button>
      </div>
    )
  }
};

export default Header;
