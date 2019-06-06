import React from 'react';
import SingleArticleCard from './SingleArticleCard';

export class ShowSingleArticle extends React.Component {
  render() {
    return (
      <div className='articleInput'>
        <ul>
          {
            this.props.articles.map(article => {
              return <SingleArticleCard article={article} loggedInUser={this.props.loggedInUser} key={article.article_id} handleArticleDelete={this.props.handleArticleDelete} />
            })
          }
        </ul>
      </div>
    )
  };
};


export default ShowSingleArticle;