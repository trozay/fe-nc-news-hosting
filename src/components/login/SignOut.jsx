import React from 'react'

export const SignOut = props => {
  return (
    <button className='sign-out btn btn-outline-primary btn-sm' onClick={props.signOut}>log out</button>
  )
};

export default SignOut;