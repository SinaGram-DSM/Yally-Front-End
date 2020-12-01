import { getClientAccessToken } from "./client";

export const onUserListening = (email) => {
  return getClientAccessToken.post(`/user/listening/${email}`);
};

export const offUserListening = (email) => {
  return getClientAccessToken.delete(`/user/listening/${email}`);
};
