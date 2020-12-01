import { getClientBearerAccessToken } from "./client";

export const tagSearch = (values, page) => {
  return getClientBearerAccessToken.get(
    `/search/post?hashtag=${values}&page=${page}`
  );
};

export const userSearch = (values, page) => {
  return getClientBearerAccessToken.get(
    `/search/user?nickname=${values}&page=${page}`
  );
};
