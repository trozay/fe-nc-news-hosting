import React from 'react'

export class LoginBar extends React.Component {
  state = {
    usernameInput: null
  };

  render() {
    return (
      <form onSubmit={this.props.handleLogin}>
        <input type='text' onChange={this.handleInput} />
        <input type='submit' value='login' />
      </form>
    )
  }

  handleInput = e => {
    this.setState({ usernameInput: e.target.value });
  };
};

export default LoginBar;