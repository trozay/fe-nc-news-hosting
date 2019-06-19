import React from 'react'

const AddArticleForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className='articleForm'>
      <div className="form-group articleInputBox titleInput">
        {/* <label className='articleLabel titleInput' >Article Title</label> */}
        <input required={true} type='text' onChange={props.handleChange} className='articleTitleInput articleInput' placeholder='Title' />
      </div>
      <div className='form-group'>
        <input required={true} type='text' onChange={props.handleChange} className='topicInput articleInput' placeholder='topic' />
      </div>
      <div className='form-group'>
        <input required={true} type='text' onChange={props.handleChange} className='bodyInput articleInput' placeholder="What's on your mind" />
      </div>
      <button type='submit' className='btn btn-outline-primary btn-sm'>Post</button>
    </form>
  )
};

export default AddArticleForm;