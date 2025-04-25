import {http} from "../config/http.jsx";

export function getAll() {
  return http.get("/vehicles");
}

export function saveCar(vehicle) {
  return http.post("/vehicles", vehicle);
}

export function getCarById(id) {
  return http.get(`/vehicles/${id}`);
}