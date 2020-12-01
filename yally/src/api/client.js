import axios from "axios";
import { url } from "../constant";

export const client = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getClientBearerAccessToken = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export const getClientAccessToken = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });