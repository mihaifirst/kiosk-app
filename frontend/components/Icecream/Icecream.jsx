import React from "react";
import { Link } from "react-router-dom";

const Icecream = () => {
  return (
    <>
      <h1> Icecream</h1>
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
2;
export default Icecream;
