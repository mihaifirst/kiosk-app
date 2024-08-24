import React from "react";
import { Link } from "react-router-dom";

const Coffe = () => {
  return (
    <>
      <h1> Coffe</h1>
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

export default Coffe;
