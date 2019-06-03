import React from 'react';
import Header from './components/header';
import Home from './components/home';
import ArticlesByTopics from './components/articles/ArticlesByTopics';
import SingleArticle from './components/articles/SingleArticle';
import ArticleByUser from './components/articles/ArticleByUser';
import { Router } from '@reach/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path='/' />
        <ArticlesByTopics path='/:topic/articles' />
        <SingleArticle path='/articles/:id' />
        <ArticleByUser path='/articles/author/:author' />
      </Router>
    </div>
  );
}

export default App;
