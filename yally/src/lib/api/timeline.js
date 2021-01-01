import { getClientBearerAccessToken } from "./client";

export const getTimeline = (page) => {
  return getClientBearerAccessToken.get(`/timeline/${page}`);
};

export const getFriend = () => {
  return getClientBearerAccessToken.get("/timeline/friend");
};

export const getTimelineInfo = () => {
  return getClientBearerAccessToken.get("/timeline");
};
