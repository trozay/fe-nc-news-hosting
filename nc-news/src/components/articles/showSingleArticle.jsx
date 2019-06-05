import React from 'react';
import { updateArticleVote } from '../../api';
import ArticleCard from './articleCard';

export class ShowSingleArticle extends React.Component {
  render() {
    return (
      <div className='articleInput'>
        <ul>
          {
            this.props.articles.map(article => {
              return <ArticleCard article={article} loggedInUser={this.props.loggedInUser} key={article.article_id} />
            })
          }
        </ul>
      </div>
    )
  };
  handleVoteClick = props => {
    updateArticleVote(props)
      .then(updatedVote => {
        console.log(updatedVote)
      })
      .catch(console.dir);
  };
};


export default ShowSingleArticle;