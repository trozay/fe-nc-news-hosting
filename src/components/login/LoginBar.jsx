import React from 'react'

export class LoginBar extends React.Component {
  state = {
    usernameInput: null
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-group login-bar'>
        <input required={true} type='text' onChange={this.handleInput} className='form-control login-input' placeholder
          ='jessjelly' />
        <button type='submit' value='login' className='btn btn-outline-primary btn-sm login-btn'>Log In</button>
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