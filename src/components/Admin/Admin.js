import React, { useEffect, useState } from "react";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  function cancel(id) {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const reaminingOrder = orders.filter((order) => order._id !== id);
            setOrders(reaminingOrder);
          } else {
            alert("something went wrong");
          }
        });
    }
  }
  return (
    <div className="container">
      <h1
        className="mt-4
      "
      >
        Manage Orders
      </h1>
      <hr className="text-danger mb-2" />

      <div className=" container">
        <table className="table table-hover">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Package Title</th>
                <th scope="col">Price</th>
                <th scope="col">Email</th>
                <th scope="col">User Name</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const { _id, img, title, email, price, displayName } = order;
                return (
                  <tr key={_id}>
                    <td key={_id}>
                      <img
                        className="img-fluid"
                        width="50px"
                        src={img}
                        alt=""
                      />
                    </td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{email}</td>
                    <td>{displayName}</td>
                    <td>
                      <button
                        onClick={() => cancel(_id)}
                        className="btn btn-danger"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </table>
      </div>
    </div>
  );
};

export default Admin;
