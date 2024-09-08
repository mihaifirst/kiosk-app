import React from "react";
import "./Menu.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import icecream from "../../assets/images/ice-cream.jpg";
import drinks from "../../assets/images/drinks.png";
import cake from "../../assets/images/cake.png";
import freshdrinks from "../../assets/images/fresh-drinks.png";
import coffe from "../../assets/images/coffe.png";
import CancelOrderModal from "../CancelOrderModal/CancelOrderModal";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3333/api/products")
      .then(({ data }) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  const getRoute = (productTitle) => {
    switch (productTitle) {
      case "Cafea, Ceai, Ciocolata":
        return "/Coffe";
      case "Bauturi":
        return "/Drinks";
      case "Prajituri":
        return "/Cake";
      case "Inghetata":
        return "/Icecream";
      case "Sucuri Proaspete":
        return "/FreshDrinks";
    }
  };
  // TODO de modificat, event.path

  const productsImg = {
    "Cafea, Ceai, Ciocolata": coffe,
    Bauturi: drinks,
    Prajituri: cake,
    Inghetata: icecream,
    "Sucuri Proaspete": freshdrinks,
  };

  const handleCancelConfirm = () => {
    navigate("/");
  };

  return (
    <>
      <div className="homepage">
        <h1>Menu</h1>
        <div className="box">
          {products.map((event, index) => {
            const image = productsImg[event.title] || "";
            return (
              <NavLink to={getRoute(event.title)} key={index}>
                <img src={image} className="menu-image" />
                <span>{event.title}</span>
              </NavLink>
            );
          })}
        </div>
        <div className="cancelAndBack">
          <CancelOrderModal onConfirm={handleCancelConfirm} />
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
