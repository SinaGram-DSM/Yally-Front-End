import axios from "axios";
import { url } from "../constant";

export const client = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getClientAccessToken = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});