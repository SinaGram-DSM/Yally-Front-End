import { getClientBearerAccessToken, getClientAccessToken } from "./client";

export const onUserListening = (email) => {
  return getClientBearerAccessToken.post(`/user/listening/${email}`);
};

export const offUserListening = (email) => {
  return getClientBearerAccessToken.delete(`/user/listening/${email}`);
};

export const getListeningList = (email) => {
  return getClientAccessToken.get(`/profile/${email}/listening`);
};

export const getListenerList = (email) => {
  return getClientAccessToken.get(`/profile/${email}/listener`);
};
