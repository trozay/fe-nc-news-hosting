import axios from 'axios';
const baseUrl = 'https://new-nc-app.herokuapp.com/api';

export const getArticles = query => {
  return axios.get(`${baseUrl}/articles`, {
    params: query
  })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getSingleArticle = id => {
  return axios.get(`${baseUrl}/articles/${id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getCommentsByArticle = id => {
  return axios.get(`${baseUrl}/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getUser = username => {
  return axios.get(`${baseUrl}/users/${username}`)
    .then(({ data: { user } }) => user)
};



export default getArticles;