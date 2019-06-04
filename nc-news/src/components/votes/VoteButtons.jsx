import React from 'react'

export const VoteButtons = props => {
  return (
    <div className='container'>
      <button type='button' className='btn' onClick={() => props.handleVoteClick({ inc_votes: 1, id: props.id })}>↑</button>
      <button type='button' className='btn' onClick={() => props.handleVoteClick({ inc_votes: -1, id: props.id })}>↓</button>
    </div>
  )
};

export default VoteButtons;
