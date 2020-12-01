import { getClientAccessToken } from "./client";

export const addPost = (formData) => {
  return getClientAccessToken.post("/post", formData);
};

export const getDetailPost = (id) => {
  return getClientAccessToken.get(`/post/${id}`);
};

export const getPostComment = (id) => {
  return getClientAccessToken.get(`/post/${id}/comment`);
};

export const deletePost = (id) => {
  return getClientAccessToken.delete(`/post/${id}`);
};

export const editPost = (id, formData) => {
  return getClientAccessToken.put(`/post/${id}`, formData);
};

export const addComment = (id, formData) => {
  return getClientAccessToken.post(`/post/comment${id}`, formData);
};

export const deleteComment = (id) => {
  return getClientAccessToken.delete(`/post/comment${id}`);
};

export const onPostYally = (id) => {
  return getClientAccessToken.get(`/post/yally/${id}`);
};

export const offPostYally = (id) => {
    return getClientAccessToken.delete(`/post/yally/${id}`);
  };