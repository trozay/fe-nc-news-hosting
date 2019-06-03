import React from 'react'

const AddArticleForm = props => {
  return (
    <div>
      <label>
        Username:
        <input type='text' onChange={props.handleChange} className='usernameInput' />
      </label>
      <label>
        Article Title:
          <input type='text' onChange={props.handleChange} className='articleTitleInput' />
      </label>
      <label>
        Body:
          <input type='text' onChange={props.handleChange} className='bodyInput' />
      </label>
      <input type='submit' />
    </div>
  )
};

export default AddArticleForm;