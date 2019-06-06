import React from 'react'

export class LoginBar extends React.Component {
  state = {
    usernameInput: null
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-group'>
        <input require={true} type='text' onChange={this.handleInput} className='form-control' />
        <button type='submit' value='login' className='btn btn-primary btn-sm'>Log In</button>
      </form>
    )
  }
  handleInput = e => {
    this.setState({ usernameInput: e.target.value });
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogin(this.state.usernameInput);
  };

};

export default LoginBar;