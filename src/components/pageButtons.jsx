import React from 'react'

const PageButtons = props => {
  const totalPages = Array.from({ length: props.maxPages });
  return (
    <div>
      {totalPages.map((page, i) => {
        return <button key={i + 1} onClick={() => props.changePage(i + 1)}>{i + 1}</button>
      })}
    </div>
  );
};

export default PageButtons;