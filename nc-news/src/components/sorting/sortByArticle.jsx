import React from 'react'


export const SortByArticle = props => {
  return (
    <div>
      <h4>Sort By</h4>
      <button className='btn btn-primary' onClick={() => props.filterArticles('votes')}>Votes</button>
      <button className='btn btn-primary' onClick={() => props.filterArticles('comment_count')}>Comment Count</button>
      <button className='btn btn-primary' onClick={() => props.filterArticles('created_at')}>Created At</button>
    </div>
  )
}

export default SortByArticle;