import axios from "axios";

export const api = axios.create({
  baseURL: "https://serene-coast-45842.herokuapp.com"
});