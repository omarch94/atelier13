import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Produit from "./Produit";

const ProdsCategorie = () => {
  const [produits, setProduits] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${catId}/products`);
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
};

export default ProdsCategorie;