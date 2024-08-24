import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Touch to order</h1>
      <span>Apasa pentru a comanda</span>
      <div className="language">
        <Link to="/Menu">
          <span>Romana</span>
        </Link>
        <div className="border"></div>
        <Link to="/Menu">
          <span>English</span>
        </Link>
      </div>
      <span className="aqua-park">Aqua Park</span>
    </div>
  );
};

export default HomePage;
