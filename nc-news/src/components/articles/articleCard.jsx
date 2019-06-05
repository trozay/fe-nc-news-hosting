import React, { Component } from 'react'
import { Link } from '@reach/router'
import VoteButtons from '../votes/VoteButtons'
import { updateArticleVote } from '../../api'

class ArticleCard extends Component {
  state = {
    articleVotes: null
  };

  componentDidMount() {
    this.setState({ articleVotes: this.props.article.votes })
  };

  render() {
    const { article } = this.props;
    const { articleVotes } = this.state;
    return (
      <div className='row'>
        <li className='card col-md'>
          <Link to={`/articles/${article.article_id}`}><h4 className='card-title card-header'>{article.title}</h4></Link>
          <Link to={`/articles/author/${article.author}`}><h6>Author: {article.author}</h6></Link>
          <h6>Votes: {articleVotes}</h6>
          <h6>Comments: {article.comment_count}</h6>
          {this.props.loggedInUser && <VoteButtons
            handleVoteClick={this.handleVoteClick} id={article.article_id} />}
          <p>{article.created_at}</p>
        </li>
      </div>
    )
  }

  handleVoteClick = props => {
    updateArticleVote(props)
    this.setState(prevState => {
      return {
        articleVotes: prevState.articleVotes + props.inc_votes
      };
    });
  };
};

export default ArticleCard;