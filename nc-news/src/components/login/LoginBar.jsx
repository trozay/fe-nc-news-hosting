import React from 'react'

export class LoginBar extends React.Component {
  state = {
    usernameInput: null
  };

  render() {
    return (
      <form onSubmit={this.props.handleLogin}>
        <input type='text' onChange={this.props.handleInput} />
        <input type='submit' value='login' />
      </form>
    )
  }
};

export default LoginBar;