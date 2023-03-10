import React from 'react';
import { useNavigate } from 'react-router-dom';

const Produit = (props) => {

    const navigate = useNavigate();
    return (
        <div className='card'>
             <img src={props.produit.images[0]}/>
            <h2>{props.produit.title}</h2>
            <button onClick={() => navigate(`/produits/${props.produit.id}`)}>Plus de details</button>
        </div>
    );
}

export default Produit;