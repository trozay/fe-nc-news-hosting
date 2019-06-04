import React from 'react'


export const SortByComments = props => {
  return (
    <div>
      <h4>Sort By</h4>
      <button onClick={() => props.filterArticles('votes')}>Votes</button>
      <button onClick={() => props.filterArticles('created_at')}>Created At</button>
    </div>
  )
}

export default SortByComments;