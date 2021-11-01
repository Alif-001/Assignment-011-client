import React from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddNewOffers = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://morning-everglades-39414.herokuapp.com/course/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Offer Added!", "Offer has been added!", "success");
          reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="/home">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="from-section-2 container">
              <h2 className="fw-bolder mt-5">Add new offer</h2>
              <hr className="text-danger w-100" />
              <form onSubmit={handleSubmit(onSubmit)}>
                {errors.img && (
                  <Alert variant="danger">
                    <span className="fw-bold">All Input are required</span>
                  </Alert>
                )}
                <input
                  className="my-2 w-75"
                  placeholder="Offer Name"
                  {...register("name", { required: true })}
                />{" "}
                <br />
                <input
                  className="my-2 w-75"
                  placeholder="Offer Title"
                  {...register("title", { required: true })}
                />{" "}
                <br />
                <textarea
                  className="my-2 w-75"
                  placeholder="Offer descriptions"
                  {...register("dec", { required: true })}
                />{" "}
                <br />
                <input
                  className="my-2 w-75"
                  placeholder="Offer price"
                  type="number"
                  {...register("price", { required: true })}
                />{" "}
                <br />
                <input
                  className="my-2 w-75 "
                  placeholder="Offer image URl"
                  {...register("img", { required: true })}
                />
                <br />
                <input className="my-2 btn btn-success" type="submit" />
              </form>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default AddNewOffers;
