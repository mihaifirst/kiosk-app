import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./FreshDrinks.css";
import CancelOrderModal from "../CancelOrderModal/CancelOrderModal";

const FreshDrinks = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:3333/api/products")
      .then(({ data }) => {
        setProducts(data.products[4].buttons);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCancelConfirm = () => {
    navigate("/");
  };


  return (
    <>
      <div className="homepage">
        <h1>Fresh Drinks</h1>
        <div className="box">
          {products.map((event, index) => {
            return (
              <NavLink to="/" key={index}>
                <img src={event.img} className="menu-image fresh" />
                <span>{event.title}</span>
                <span>{event.weight}</span>
              </NavLink>
            );
          })}
        </div>
        <div className="cancelAndBack">
        <CancelOrderModal onConfirm={handleCancelConfirm} />
          <Link to="/Menu">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FreshDrinks;
