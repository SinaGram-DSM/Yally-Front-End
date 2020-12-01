import { client } from "./client";

export const register = (email, password, nickname, age) => {
  return client.post("/user", { email, password, nickname, age });
};

export const login = (email, password) => {
  return client.post("/user/auth", { email, password });
};

export const authCodePost = (email) => {
  return client.post("/user/auth-code/email", { email });
};

export const authCheck = (email, code) => {
  return client.post("/user/auth", { email, code });
};

export const passwordResetCode = (email) => {
  return client.post("/user/reset-code/email", { email });
};

export const passwordReset = (email, code, password) => {
  return client.put("/user/auth/password", { email, code, password });
};
