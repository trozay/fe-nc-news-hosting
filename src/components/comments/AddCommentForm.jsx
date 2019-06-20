import React from 'react'

const AddCommentForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input required={true} type='text' className='body form-control' onChange={props.onChange} value={props.body} />
    </form>
  )
};

export default AddCommentForm;