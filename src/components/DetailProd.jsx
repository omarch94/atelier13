import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailProd = () => {
  const [produit, setProduit] = useState([]);
  const { prodId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${prodId}`
      );
      // console.log("Data : " + res.data);
      return res.data;
    };

    getData().then((p) => setProduit(p));
  }, []);

  return (
    <div className="produit">
      {produit.id && (
        <div>
          <div className="images">
            <img src={produit.images[0]} alt="image1" />
            <img src={produit.images[1]} alt="image2" />
            <img src={produit.images[2]} alt="image3" />
          </div>

          <h1>{produit.title}</h1>
          <p>{produit.description}</p>
          <h3>{produit.price}</h3>
        </div>
      )}
    </div>
  );
};

export default DetailProd;