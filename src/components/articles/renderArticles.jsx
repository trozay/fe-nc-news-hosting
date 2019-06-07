import React, { Component } from 'react'
import SortByArticle from '../sorting/sortByArticle';
import PageButtons from '../pageButtons';
import ArticleList from './articleList';

export default class RenderArticles extends Component {
  render() {
    const { articles, maxPage, loggedInUser, changePage, filterItems, title, query } = this.props;
    return (
      <div>
        <PageButtons maxPages={maxPage} changePage={changePage} />
        <h3>{title}</h3>
        <SortByArticle filterItems={filterItems} query={query} />
        <ul>
          {articles && <ArticleList articles={articles} loggedInUser={loggedInUser} />}
        </ul>
      </div>
    )
  }
}
