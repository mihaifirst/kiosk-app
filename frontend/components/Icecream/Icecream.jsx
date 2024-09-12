import React from "react";
import { Link, NavLink , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Icecream.css";
import CancelOrderModal from "../CancelOrderModal/CancelOrderModal";

const Icecream = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3333/api/products")
      .then(({ data }) => {
        setProducts(data.products[2].buttons);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCancelConfirm = () => {
    navigate("/");
  };

  return (
    <>
      <div className="homepage">
        <h1>Icecream</h1>
        <div className="box">
          {products.map((event, index) => {
            return (
              <NavLink to="/" key={index}>
                <img src={event.img} className="menu-image icecream" />
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
2;
export default Icecream;
