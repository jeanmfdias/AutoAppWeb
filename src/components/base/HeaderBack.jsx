import {Link, useNavigate} from "react-router-dom";

export default function HeaderBack({title}) {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between">
      <h1 className="float-start">{title}</h1>
      <button onClick={() => navigate(-1)} className="btn btn-default float-end mt-2">
        Back
      </button>
    </div>
  );
}