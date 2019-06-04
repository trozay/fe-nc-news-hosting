import React from 'react'

const AddArticleForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Article Title:
          <input type='text' onChange={props.handleChange} className='articleTitleInput' />
        </label>
        <label>
          Topic:
          <input type='text' onChange={props.handleChange} className='topicInput' />
        </label>
        <label>
          Body:
          <input type='text' onChange={props.handleChange} className='bodyInput' />
        </label>
        <input type='submit' />
      </form>
    </div>
  )
};

export default AddArticleForm;