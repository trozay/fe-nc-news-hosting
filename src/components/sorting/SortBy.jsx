import React from 'react'


export const SortBy = props => {
  return (
    <div>
      <h5>Sort By: {props.query}</h5>
      {props.columnsToSort.map((column, i) => {
        return <button key={`${i}sorting`} onClick={() => props.filterItems(column.split(' ').join('_'))}>{column}</button>
      })}
    </div >
  )
}

export default SortBy;