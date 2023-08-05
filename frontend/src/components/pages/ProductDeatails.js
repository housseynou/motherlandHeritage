import React from 'react';
import image2 from '../../images/image2.png';

const ProductDetails = ({ product }) => {
  return (
        <>
            <h1>Detail du Produit</h1>
            <img src={image2} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        
        </>
    );
};

export default ProductDetails;