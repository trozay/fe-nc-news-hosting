import React, { Component } from 'react'
import SortBy from '../sorting/SortBy';
import PageButtons from '../pageButtons';
import ArticleList from './articleList';
import Loader from 'react-loader-spinner'

export default class RenderArticles extends Component {
  render() {
    const { articles, maxPage, loggedInUser, changePage, filterItems, title, query } = this.props;
    return (
      <div>
        <PageButtons maxPages={maxPage} changePage={changePage} />
        <h3>{title}</h3>
        {!articles && <Loader type="Puff"
          color="#00BFFF"
          height="100"
          width="100" />}
        {articles && <SortBy filterItems={filterItems} query={query} columnsToSort={['votes', 'comment count', 'created at']} />}
        {articles && <ArticleList articles={articles} loggedInUser={loggedInUser} />}
      </div>
    )
  }
}
