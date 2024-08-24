import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import icecream from "../../assets/images/ice-cream.jpg";
import drinks from "../../assets/images/drinks.png";
import cake from "../../assets/images/cake.png";
import freshdrinks from "../../assets/images/fresh-drinks.png";
import coffe from "../../assets/images/coffe.png";

const Menu = () => {
  return (
    <>
      <div className="homepage">
        <h1>Menu</h1>
        <div className="box">
          <Link to="/Icecream">
            <div className="content">
              <img src={icecream} />
            </div>
            Ice cream
          </Link>
          <Link to="/Drinks">
            <div className="content">
              <img src={drinks} />
            </div>
            Drinks
          </Link>
          <Link to="/Cake">
            <div className="content">
              <img src={cake} />
            </div>
            Cake
          </Link>
          <Link to="/FreshDrinks">
            <div className="content">
              <img src={freshdrinks} />
            </div>
            Fresh Drinks
          </Link>
          <Link to="/Coffe">
            <div className="content">
              <img src={coffe} />
            </div>
            Coffe
          </Link>
        </div>
        <div className="cancelAndBack">
          <Link to="/">
            <button>Cancel Order</button>
          </Link>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
