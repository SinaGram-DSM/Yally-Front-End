import { getClientBearerAccessToken } from "./client";

export const hashTagSearch = (values, page) => {
  return getClientBearerAccessToken.get(
    `/search/post?hashtag=${values}&page=${page}`
  );
};

export const userNameSearch = (values) => {
  return getClientBearerAccessToken.get(`/search/user?nickname=${values}`);
};
