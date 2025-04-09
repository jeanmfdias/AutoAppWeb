import {useEffect, useState} from "react";
import {getAll} from "../../services/cars.service.jsx";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAll().then(({data}) => {
      setCars(data.content);
    })
  }, [])

  return (
    <>
      <h1>Cars</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
        { cars.map(car => (<tr key={car.id}>
          <td>{car.brand}</td>
          <td>{car.model}</td>
          <td>{car.factory_year}/{car.model_year}</td>
        </tr>)) }
        </tbody>
      </table>
    </>
  );
}