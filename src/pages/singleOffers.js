import React from "react";
import { useHistory } from "react-router";

const SingleOffer = ({ offer }) => {
  const { name, title, _id, price, img, details } = offer;
  const history = useHistory();
  const seeDetails = (id) => {
    history.push(`/offer/${id}`);
  };
  return (
    <div className="col-lg-4">
      <div className="card my-card m-3">
        <img src={img} className="my-img" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className="mt-3 border-bottom pb-2">{title}</h5>
          <p className="text-muted">{details}</p>
          <h3 className="fw-light">USD : {price}</h3>
          <div className="d-flex justify-content-between align-items-center my-2">
            <button
              onClick={() => seeDetails(_id)}
              className=" btn-lg btn-primary w-100"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
