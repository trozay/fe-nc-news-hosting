import React from 'react'

const AddArticleForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Article Title:
          <input required={true} type='text' onChange={props.handleChange} className='articleTitleInput' />
        </label>
        <label>
          Topic:
          <input required={true} type='text' onChange={props.handleChange} className='topicInput' />
        </label>
        <label>
          Body:
          <input required={true} type='text' onChange={props.handleChange} className='bodyInput' />
        </label>
        <button type='submit' className='btn btn-primary btn-sm'>Post</button>
      </form>
    </div>
  )
};

export default AddArticleForm;