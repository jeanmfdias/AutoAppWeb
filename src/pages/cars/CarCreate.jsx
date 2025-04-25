import {useState} from "react";
import {http} from "../../config/http.jsx";
import {saveCar} from "../../services/cars.service.jsx";
import HeaderBack from "../../components/base/HeaderBack.jsx";

export default function CarCreate() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [factoryYear, setFactoryYear] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [acquiredPrice, setAcquiredPrice] = useState("");
  const [success, setSuccess] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await saveCar({
      brand: brand,
      model: model,
      factory_year: factoryYear,
      model_year: modelYear,
      acquired_price: acquiredPrice,
    });

    if (response.status === 200) {
      setBrand("");
      setModel("");
      setFactoryYear("");
      setModelYear("");
      setAcquiredPrice("");
      setSuccess(true);
    }
  }

  return (
    <>
      <HeaderBack title={"Add New Car"} />

      {success ? (<div className="alert alert-success" role="alert">Car saved successfully!</div>) : null}

      <form className="form">
        <div className="form-group mb-3">
          <input type="text"
                 placeholder="Brand"
                 className="form-control"
                 id="brand"
                 value={brand}
                 onChange={(e) => setBrand(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <input type="text"
                 placeholder="Model"
                 className="form-control"
                 id="model"
                 value={model}
                 onChange={(e) => setModel(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <input type="number"
                 placeholder="Factory Year"
                 className="form-control"
                 id="factoryYear"
                 value={factoryYear}
                 onChange={(e) => setFactoryYear(e.target.value)}/>
        </div>
        <div className="form-group mb-3">
          <input type="number"
                 placeholder="Model Year"
                 className="form-control"
                 id="modelYear"
                 value={modelYear}
                 onChange={(e) => setModelYear(e.target.value)}/>
        </div>
        <div className="form-group mb-3">
          <input type="number"
                 placeholder="Acquired Price"
                 className="form-control"
                 id="acquiredPrice"
                 value={acquiredPrice}
                 onChange={(e) => setAcquiredPrice(e.target.value)}/>
        </div>
        <button onClick={(e) => submitHandler(e)} className="btn btn-success" type="button">Save</button>
      </form>
    </>
  );
}