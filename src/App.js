import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
// import { Route,Routes } from "react-router";
import "./App.css";
import Categories from "./components/Categories";
import DetailProd from "./components/DetailProd";
import ProdsCategorie from "./components/ProdsCategorie";
import Produits from "./components/Produits";
import Home from "./components/Home";

function App() {

  return (
    <div>
      <Routes>
        <Route  path="/" element={<Home />}>
          <Route path="categories" >
              <Route index element={<Categories />} />
              <Route path=":catId" element={<ProdsCategorie />} />
          </Route>
          <Route path="produits" >
              <Route index element={<Produits />} />
              <Route path=":prodId" element={<DetailProd />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;