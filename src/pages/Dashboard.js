import React, { useState } from "react";
import useAuth from "../hooks/useAuth.js";
import Cart from "./Cart.js";

const Dashboard = () => {
  const [current, setCurrent] = useState();
  const { id } = useAuth();
  function profileHandler(e) {
    setCurrent(e.target.value);
  }
  function cartHandler(e) {
    setCurrent(e.target.value);
  }

  return (
    <div>
      {current === "Cart" && <Cart key={id}></Cart>}
      <Cart key={id}></Cart>
    </div>
  );
};

export default Dashboard;
