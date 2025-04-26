import {useEffect, useState} from "react";
import {getCarById} from "../../services/cars.service.jsx";

export function useCar(carId) {
  const [car, setCar] = useState([]);

  useEffect(() => {
    getCarById(carId).then(({data}) => {
      setCar(data);
    });
  }, [carId]);

  return car;
}
