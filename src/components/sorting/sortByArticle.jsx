import React from 'react'


export const SortByArticle = props => {
  return (
    <div>
      <h5>Sort By: {props.query}</h5>
      <button className='btn btn-primary' onClick={() => props.filterItems('votes')}>Votes</button>
      <button className='btn btn-primary' onClick={() => props.filterItems('comment_count')}>Comment Count</button>
      <button className='btn btn-primary' onClick={() => props.filterItems('created_at')}>Created At</button>
    </div>
  )
}

export default SortByArticle;