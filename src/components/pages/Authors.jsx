import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import { getAllUsers } from '../../api'
import { Link } from '@reach/router'

export default class Authors extends Component {
  state = {
    authors: null,
  };

  componentDidMount() {
    getAllUsers()
      .then(users => {
        this.setState({ authors: users })
      })
  };

  render() {
    const { authors, } = this.state;
    return (
      <div className='authorsPage'>
        <h1>Most Popular Authors</h1>
        {!authors && <Loader type="Puff"
          color="#00BFFF"
          height="100"
          width="100" />}
        <ul>
          {authors && authors.map(author => {
            return <li key={`authors${author.username}`}>
              <Link to={`/articles/author/${author.username}`}>
                <div>
                  <h2>{author.name}</h2>
                  <img src={`${author.avatar_url}` || 'http://chittagongit.com/images/default-user-icon/default-user-icon-5.jpg'} alt={`${author.name} avatar`} />
                </div>
              </Link>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
