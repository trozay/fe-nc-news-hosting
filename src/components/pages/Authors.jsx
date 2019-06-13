import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import { getAllUsers } from '../../api'

export default class Authors extends Component {
  state = {
    authors: null
  };

  componentDidMount() {
    getAllUsers()
      .then(users => {
        this.setState({ authors: users })
      })
  };

  render() {
    const { authors } = this.state;
    return (
      <div>
        <h1>Most Popular Authors</h1>
        {!authors && <Loader type="Puff"
          color="#00BFFF"
          height="100"
          width="100" />}
      </div>
    )
  }
}
