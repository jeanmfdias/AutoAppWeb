import {useEffect, useState} from "react";
import {getAll} from "../../services/cars.service.jsx";
import {Link} from "react-router-dom";
import {CarItem} from "../../components/cars/CarItem.jsx";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAll().then(({data}) => {
      setCars(data.content);
    })
  }, [])

  return (
    <>
      <div className="flex-row">
        <h1 className="align-baseline float-start">Cars</h1>
        <Link to={"/cars/create"} className="btn btn-primary float-end mt-2">Add</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        { cars.map(car => <CarItem key={car.id} car={car} />) }
        </tbody>
      </table>
    </>
  );
}