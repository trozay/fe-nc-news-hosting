import React, { Component } from 'react'
import { Link } from '@reach/router'
import VoteButtons from '../votes/VoteButtons'
import { updateArticleVote } from '../../api'
import { deleteArticle } from '../../api'

class ArticleCard extends Component {
  state = {
    articleVotes: null,
    deleteMsg: null
  };

  componentDidMount() {
    this.setState({ articleVotes: this.props.article.votes })
  };

  render() {
    const { article, loggedInUser } = this.props;
    const { articleVotes, deleteMsg } = this.state;
    let canDelete;
    if (deleteMsg) return <h2>{deleteMsg}</h2>
    return (
      <li className='card col-md articleCard'>
        <Link to={`/articles/${article.article_id}`}><h4 className='card-title card-header'>{article.title}</h4></Link>
        <Link to={`/articles/author/${article.author}`}><h6>Author: {article.author}</h6></Link>
        <h6>Votes: {articleVotes}</h6>
        <h6>Comments: {article.comment_count}</h6>
        {loggedInUser && <VoteButtons
          handleVoteClick={this.handleVoteClick} id={article.article_id} />}
        <p>{article.created_at.slice(0, 10)}</p>
        {article.author === loggedInUser ? canDelete = true : false}
        {canDelete && <button className='btn btn-danger btn-sm' onClick={() => this.handleArticleDelete(article.article_id)}>Delete</button>}
      </li>
    )
  }

  handleArticleDelete = id => {
    deleteArticle(id)
      .then(deletedArticle => {
        this.setState({ deleteMsg: 'Article Deleted' })
      })
      .catch(err => console.dir(err))
  };

  handleVoteClick = event => {
    updateArticleVote(event)
      .catch(err => this.setState(prevState => {
        return {
          articleVotes: prevState.articleVotes - event.inc_votes
        };
      }));

    this.setState(prevState => {
      return {
        articleVotes: prevState.articleVotes + event.inc_votes
      };
    });
  };
};

export default ArticleCard;