import {useParams} from "react-router-dom";
import {deleteCarById} from "../../services/cars.service.jsx";
import {useState} from "react";

export default function CarDelete() {
  const { id } = useParams();
  const [successDisplay, setSuccessDisplay] = useState("none");
  const [warningDisplay, setWarningDisplay] = useState("none");
  deleteCarById(id).then((response) => {
    if (response.status === 404) {
      setWarningDisplay("block");
    }
    if (response.status === 200) {
      setSuccessDisplay("block");
    }
  });

  return (
    <>
      <div className="alert alert-success" role="alert" style={{display: successDisplay}}>
        Car deleted successfully.
      </div>
      <div className="alert alert-warning" role="alert" style={{display: warningDisplay}}>
        Car not found.
      </div>
    </>
  );
}