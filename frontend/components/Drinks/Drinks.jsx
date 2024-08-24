import React from "react";
import { Link } from "react-router-dom";

const Drinks = () => {
  return (
    <>
      <h1> Drinks</h1>
      <div className="cancelAndBack">
        <Link to="/Menu">
          <button>Cancel Order</button>
        </Link>
        <Link to="/Menu">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Drinks;
