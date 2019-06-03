import React from 'react'

export class LoginBar extends React.Component {
  state = {
    usernameInput: null
  };

  render() {
    console.log(this.state.usernameInput, '****')
    return (
      <form>
        <input type='text' onChange={this.handleInput} />
        <button>Login</button>
      </form>
    )
  }

  handleInput = e => {
    console.log(e.target.value)
    this.setState({ usernameInput: e.target.value });
  };
};

export default LoginBar;