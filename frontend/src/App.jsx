import { useState } from "react";
import "./App.css";
import axios from "axios";
import HomePage from "../components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Icecream from "../components/Icecream/Icecream";
import Drinks from "../components/Drinks/Drinks";
import Cake from "../components/Cake/Cake";
import Coffe from "../components/Coffe/Coffe";
import FreshDrinks from "../components/FreshDrinks/FreshDrinks";

function App() {
  const [bundleSettings, setBundleSetting] = useState({});

  function getBundleSettings() {
    axios
      .get("http://localhost:3333/api/getBundleSettings")
      .then(({ data }) => {
        console.log(data);
        setBundleSetting(data);
        console.log(bundleSettings);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Icecream" element={<Icecream />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Cake" element={<Cake />} />
        <Route path="/Coffe" element={<Coffe />} />
        <Route path="/FreshDrinks" element={<FreshDrinks />} />
      </Routes>
    </>
  );
}

export default App;
