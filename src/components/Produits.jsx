import axios from "axios";
import React, { useEffect, useState } from "react";
import Produit from "./Produit";

export default function Produits() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      return res.data;
    };

    getData().then((prods) => setProduits(prods));
  }, []);

  return (
    <div className="list">
      {produits.length === 0 ? (
        <h1>Liste de produits vide</h1>
      ) : (
        produits.map((item) => <Produit produit={item} />)
      )}
    </div>
  );
}