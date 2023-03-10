import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Categorie from "./Categorie";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      return res.data;
    };

    getData().then((categories) => setCategories(categories));
  }, []);
  return (
    <div className="list">
      {categories.length === 0 ? (
        <h1>Liste des categories vide</h1>
      ) : (
        categories.map((item) => <Categorie categorie={item} />)
      )}

      <Outlet />
    </div>
  );
}