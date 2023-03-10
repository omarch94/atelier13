import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categorie = (props) => {

    const navigate = useNavigate();
    return (
        <div className='card'>
            <img src={props.categorie.image}/>
            <h2>{props.categorie.name}</h2>
            <button onClick={() => navigate(`/categories/${props.categorie.id}`)}>Liste de produits</button>
        </div>
    );
}

export default Categorie;