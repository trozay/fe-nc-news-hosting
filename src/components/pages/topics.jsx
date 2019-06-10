import React, { Component } from 'react'
import { getTopics } from '../../api'
import { Link } from '@reach/router'

export default class Topics extends Component {
  state = {
    topics: null,
    searchTerm: '',
    errMsg: null
  };

  componentDidMount() {
    getTopics()
      .then(topics => this.setState({ topics }));
  };

  render() {
    const { topics } = this.state;
    const filteredTopics = topics && topics.filter(topic => topic.slug.includes(this.state.searchTerm));
    return (
      <div className='topic-page'>
        <h4>Topics</h4>
        <input type='text' onChange={this.handleChange} />
        <ul className='nav nav-tabs topic-nav topics-list'>
          {topics && filteredTopics.map((topic, i) => {
            return <Link to={`/${topic.slug}/articles`} key={topic.slug}><li className='nav-item topic-card'><button className='btn btn-outline-primary btn-sm'>{topic.slug}</button></li></Link>
          })}
        </ul>
      </div>
    )
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
};
