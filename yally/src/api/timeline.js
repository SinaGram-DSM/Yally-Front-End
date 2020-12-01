import { getClientAccessToken } from "./client";

export const getTimeline = (page) => {
  return getClientAccessToken.get("/timeline/" + page);
};

export const getFriend = () => {
  return getClientAccessToken.get("/timeline/friend");
};

export const getTimelineInfo = () => {
  return getClientAccessToken.get("/timeline");
};
