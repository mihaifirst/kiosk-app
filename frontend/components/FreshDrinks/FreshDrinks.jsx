import React from "react";
import { Link } from "react-router-dom";

const FreshDrinks = () => {
  return (
    <>
      <h1> FreshDrinks</h1>
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

export default FreshDrinks;
