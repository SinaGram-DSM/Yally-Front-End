import { getClientBearerAccessToken } from "./client";

export const addPost = (formData) => {
  return getClientBearerAccessToken.post("/post", formData);
};

export const getDetailPost = (id) => {
  return getClientBearerAccessToken.get(`/post/${id}`);
};

export const getPostComment = (id) => {
  return getClientBearerAccessToken.get(`/post/${id}/comment`);
};

export const deletePost = (id) => {
  return getClientBearerAccessToken.delete(`/post/${id}`);
};

export const editPost = (id, formData) => {
  return getClientBearerAccessToken.put(`/post/${id}`, formData);
};

export const addComment = (id, formData) => {
  return getClientBearerAccessToken.post(`/post/comment/${id}`, formData);
};

export const deleteComment = (id) => {
  return getClientBearerAccessToken.delete(`/post/comment/${id}`);
};

export const onPostYally = (id) => {
  return getClientBearerAccessToken.get(`/post/yally/${id}`);
};

export const offPostYally = (id) => {
    return getClientBearerAccessToken.delete(`/post/yally/${id}`);
  };