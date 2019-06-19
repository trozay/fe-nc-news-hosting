import React from 'react'
import SortBy from '../sorting/SortBy';
import PageButtons from '../pageButtons';
import ArticleList from './articleList';
import Loader from 'react-loader-spinner'

const RenderArticles = props => {
  const { articles, maxPage, loggedInUser, changePage, filterItems, title, query } = props;
  return (
    <div>
      <PageButtons maxPages={maxPage} changePage={changePage} />
      <h3 className='articlesPageTitle'>{title}</h3>
      {!articles && <Loader type="Puff"
        color="#00BFFF"
        height="100"
        width="100" />}
      {articles && <SortBy filterItems={filterItems} query={query} columnsToSort={['votes', 'comment count', 'created at']} />}
      {articles && <ArticleList articles={articles} loggedInUser={loggedInUser} />}
    </div>
  )
}

export default RenderArticles 
