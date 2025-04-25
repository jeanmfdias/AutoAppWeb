import HeaderBack from "../../components/base/HeaderBack.jsx";
import {useParams} from "react-router-dom";
import {useCar} from "../../hooks/cars/useCars.jsx";

export default function CarDetail() {
  const { id } = useParams();
  const car = useCar(id);

  return (
    <>
      <HeaderBack title={"Car Details"} />

      <form>
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <div className="form-control">{car.brand}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Model</label>
          <div className="form-control">{car.model}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <div className="form-control">{`${car.factory_year}/${car.model_year}`}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Acquired Price</label>
          <div className="input-group">
            <span className="input-group-text">R$</span>
            <div className="form-control">{car.acquired_price}</div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Created At</label>
          <div className="form-control">{car.created_at}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Updated At</label>
          <div className="form-control">{car.updated_at}</div>
        </div>
      </form>
    </>
  );
}
