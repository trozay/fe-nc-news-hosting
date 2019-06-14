import React from 'react'

const AddArticleForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className='articleForm'>
      <div className="form-group articleInputBox titleInput">
        <label className='articleLabel titleInput' >Article Title</label>
        <input required={true} type='text' onChange={props.handleChange} className='articleTitleInput articleInput' />
      </div>
      <div>
        <label className='articleLabel'>Topic</label>
        <input required={true} type='text' onChange={props.handleChange} className='topicInput articleInput' />
      </div>
      <div>
        <label className='articleLabel'>Body</label>
        <input required={true} type='text' onChange={props.handleChange} className='bodyInput articleInput' />
      </div>
      <button type='submit' className='btn btn-outline-primary btn-sm'>Post</button>
    </form>
  )
};

export default AddArticleForm;