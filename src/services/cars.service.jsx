import {http} from "../config/http.jsx";

export function getAll() {
  return http.get("/vehicles");
}