import React from 'react'

const Error = ({ err }) => {
  if (err) return (
    <div>
      <h2>{err.errStatus}-{err.errMsg}</h2>
    </div>
  )
  return (<div>
    <h2>Page Not Found</h2>
  </div>
  )
};

export default Error;
