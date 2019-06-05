import axios from 'axios';
const baseUrl = 'https://new-nc-app.herokuapp.com/api';

export const getArticles = query => {
  query.sort_by = query.sort_by || 'votes';
  return axios.get(`${baseUrl}/articles`, {
    params: query
  })
    .then(({ data: { articles, total_count } }) => {
      return [articles, total_count];
    });
};

export const getSingleArticle = id => {
  return axios.get(`${baseUrl}/articles/${id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getCommentsByArticle = (id, query) => {
  query.sort_by = query.sort_by === 'comment_count' ? 'votes' : undefined;
  console.log(query, '***')
  return axios.get(`${baseUrl}/articles/${id}/comments`, {
    params: query
  })
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getUser = username => {
  return axios.get(`${baseUrl}/users/${username}`)
    .then(({ data: { user } }) => user)
};

export const postArticle = ({ author, title, body, topic }) => {
  return axios.post(`${baseUrl}/articles`, {
    author, title, topic, body
  })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const postComment = ({ username, body, id }) => {
  return axios.post(`${baseUrl}/articles/${id}/comments`, { username, body })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const updateArticleVote = ({ id, inc_votes }) => {
  return axios.patch(`${baseUrl}/articles/${id}`, { inc_votes });
};

export const deleteComment = id => {
  return axios.delete(`${baseUrl}/comments/${id}`)
    .then(deletedComment => deletedComment);
};

export const updateCommentVote = ({ id, inc_votes }) => {
  return axios.patch(`${baseUrl}/comments/${id}`, { inc_votes })
};


export default getArticles;