import React, { Component } from 'react'

export default class VoteButton extends Component {
  state = {
    changedBy: 0
  };

  render() {
    const { id } = this.props
    const { changedBy } = this.state;
    return (
      <div className='container'>
        <button type='button' disabled={changedBy === 1} className='btn' onClick={() => this.handleVoteButtons({ inc_votes: 1, id: id })}>↑</button>
        <button type='button' disabled={changedBy === -1} className='btn' onClick={() => this.handleVoteButtons({ inc_votes: -1, id: id })}>↓</button>
      </div>
    )
  };

  handleVoteButtons = (direction) => {
    this.props.handleVoteClick(direction)
    this.setState({ changedBy: direction.inc_votes })
  };
};

