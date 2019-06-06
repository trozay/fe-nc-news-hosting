import React from 'react'

const AddCommentForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input required={true} type='text' className='body' onChange={props.onChange} />
      <input type='submit' />
    </form>
  )
};

export default AddCommentForm;