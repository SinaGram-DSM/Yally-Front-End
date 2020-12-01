import { getClientAccessToken } from "./client";

export const onListening = (email) => {
  return getClientAccessToken.post(`/user/listening/${email}`);
};

export const offListening = (email) => {
  return getClientAccessToken.delete(`/user/listening/${email}`);
};
