import React from 'react';
import ArticleCard from './articleCard'

export class ArticleList extends React.Component {

  render() {
    return (
      <ul className='container articlesContainer'>
        {
          this.props.articles.map(article => {
            return <ArticleCard article={article} loggedInUser={this.props.loggedInUser} key={article.article_id} />
          })
        }
      </ul>
    )
  }
};


export default ArticleList;