import {Link} from "react-router-dom";

export function CarItem({ car }) {
  return (
    <tr>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.factory_year}/{car.model_year}</td>
      <td>
        <div className="btn-group btn-group-sm">
          <Link to={`/cars/${car.id}`} className="btn btn-info">Details</Link>
          <Link to={`/cars/${car.id}/edit`} className="btn btn-warning">Edit</Link>
        </div>
      </td>
    </tr>
  );
}