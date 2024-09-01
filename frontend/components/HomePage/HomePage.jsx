import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";

const HomePage = () => {
  const [bundleSettings, setBundleSetting] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/api/getBundleSettings")
      .then(({ data }) => {
        setBundleSetting(data.languages);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="homepage">
      <h1>Touch to order</h1>
      <span>Apasa pentru a comanda</span>
      <div className="language">
        {bundleSettings.map((event, index) => (
          <Fragment key={uuidv4()}>
            <Link to="/Menu">
              <span>{event.label}</span>
            </Link>
            {index < bundleSettings.length - 1 && (
              <div className="border"></div>
            )}
          </Fragment>
        ))}
      </div>
      <span className="aqua-park">Aqua Park</span>
    </div>
  );
};

export default HomePage;
