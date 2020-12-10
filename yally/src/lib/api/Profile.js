import { getClientBearerAccessToken, getClientAccessToken } from "./client";

export const getProfile = (email) => {
  return getClientAccessToken.get(`/profile/${email}`);
};

export const getMypage = (email, page) => {
  return getClientBearerAccessToken.get(`/mypage/timeline/${email}/${page}`);
};

export const editProfile = (form) => {
  return getClientAccessToken.put(`/profile/`, form);
};
