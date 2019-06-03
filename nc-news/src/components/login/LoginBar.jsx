import React from 'react'

export class LoginBar extends React.Component {
  state = {
    usernameInput: null
  };

  render() {
    return (
      <form onSubmit={this.props.handleLogin}>
        <input type='text' onChange={this.props.handleInput} />
        <input type='submit' />
      </form>
    )
  }
};

export default LoginBar;