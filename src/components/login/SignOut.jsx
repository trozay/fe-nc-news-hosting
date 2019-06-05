import React from 'react'

export const SignOut = props => {
  return (
    <button className='btn btn-primary btn-sm' onClick={props.signOut}>log out</button>
  )
};

export default SignOut;