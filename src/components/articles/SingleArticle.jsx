import React, { Component } from 'react'
import { getSingleArticle } from '../../api';
import SingleArticleCard from './SingleArticleCard';
import { deleteArticle } from '../../api';
import Error from '../pages/Error';
import Comments from '../comments/comments';
import Loader from 'react-loader-spinner'

class SingleArticle extends Component {
  state = {
    article: null,
    err: null
  };

  componentDidMount() {
    getSingleArticle(this.props.id)
      .then(article => article)
      .then(article => this.setState({ article }))
      .catch((err) => this.setState({ err: { errMsg: 'Article Not Found', errStatus: 400 } }))
  };

  render() {
    const { article, comments, err, deleteMsg } = this.state;
    const { loggedInUser, query } = this.props;
    if (err) return <Error err={err} />
    if (deleteMsg) return <h2>{deleteMsg}</h2>
    return (
      <div>
        {!article && <Loader type="Puff"
          color="#00BFFF"
          height="100"
          width="100" />}
        {this.props.location.state && this.props.location.state.newArticle && <h4>Article Added!</h4>}
        {article && <SingleArticleCard article={article} loggedInUser={loggedInUser} key={article.article_id} handleArticleDelete={this.handleArticleDelete} />}

        <Comments id={this.props.id} loggedInUser={loggedInUser} filterItems={this.props.filterItems} comments={comments} query={query} />
      </div >
    )
  };

  handleArticleDelete = id => {
    deleteArticle(id)
      .then(deletedArticle => this.setState({ deleteMsg: 'Article Deleted' }))
      .catch(err => console.dir(err))
  };
};

export default SingleArticle;