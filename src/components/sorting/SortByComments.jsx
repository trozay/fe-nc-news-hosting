import React from 'react'


export const SortByComments = props => {
  return (
    <div>
      <h5>Sort By: {props.query}</h5>
      <button onClick={() => props.filterItems('votes')}>Votes</button>
      <button onClick={() => props.filterItems('created_at')}>Created At</button>
    </div>
  )
}

export default SortByComments;