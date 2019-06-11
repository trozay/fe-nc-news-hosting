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
    const { changedBy } = this.state
    this.setState({ changedBy: direction.inc_votes })
    if (changedBy === 1) direction.inc_votes = -2;
    if (changedBy === -1) direction.inc_votes = 2;

    switch (direction.inc_votes) {
      case changedBy === 1 && direction.inc_votes === 1:
        console.log('hello')
        break;
      default:
        break;
    }
    this.props.handleVoteClick(direction)
  };
};

