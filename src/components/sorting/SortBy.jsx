import React from 'react'


export const SortBy = props => {
  return (
    <div className='sortBy'>
      <h5 className='sortByTitle'>Sort By: {props.query}</h5>
      {props.columnsToSort.map((column, i) => {
        return <button className='btn btn-outline-primary' key={`${i}sorting`} onClick={() => props.filterItems(column.split(' ').join('_'))}>{column}</button>
      })}
    </div >
  )
}

export default SortBy;