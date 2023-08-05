import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import image2 from '../images/image2.png';
import {BsHeart} from 'react-icons/bs';
import {MdAddShoppingCart} from 'react-icons/md';
import { ProdContainer, ProdWrapper, ProdName, Button, ProdItem, ProdInfo, Price, ButCont } from './ProductStyle';
import { Link } from 'react-router-dom';
import { CartStatus } from './CartStatus';

export default function Products() {
    
    const [products, setAllProducts] = useState([]);
    //const [newProducts, setNewProducts] = useState([]);
    //const [featuredProducts, setFeaturedProducts] = useState([]);

    const {addProduct} = useContext(CartStatus);
    function addToCart(){
        addProduct(products.id);
    }


    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
        const response = await axios.get('http://localhost:8000');
        const data = response.data;
        setAllProducts(data);
        //setNewProducts(data.filter((product) => product.is_new));
        // setFeaturedProducts(data.filter((product) => product.is_featured));
        
        } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
        }
    };

    return (
        <div>
        <h2>Tous les produits</h2>
        <ProdContainer>
            {products.map((product, id) => (
                <ProdWrapper key={id}>
                        <ProdItem>
                            <Link to={`/Products/${product.id}`}>
                                <img src={image2} alt='{product.name}'/>
                            </Link>
                            
                            <ProdInfo>
                                <ProdName>{product.name}</ProdName>
                                <Price>{product.price}</Price>
                            </ProdInfo>
                            <div></div>
                            <ButCont>
                                <Button><BsHeart/></Button>
                                <Button onClick={() => addToCart(id)}><MdAddShoppingCart/></Button>
                            </ButCont>
                        </ProdItem>
                        
                </ProdWrapper>
            ))}
        </ProdContainer>

        
        </div>
    );
};




/*      <>
            {product?.length > 0 && product.map(product =>(
                <div>{product.name}</div>
            ))}
        </>


<ProdDesc>{product.description}</ProdDesc>
<ProdType>{product.type}</ProdType>
<div>{product.inStock}</div>


        <h2>Nouveaux produits</h2>
      <ProdContainer>
        {newProducts.map((product, id) => (
          <ProdWrapper key={id}>
            <ProdItem>
              <div>
                <ProdName>{product.name}</ProdName>
                <ProdDesc>{product.description}</ProdDesc>
                <ProdType>{product.type}</ProdType>
                <div>{product.inStock}</div>
              </div>
            </ProdItem>
          </ProdWrapper>
        ))}
      </ProdContainer>

      <h2>Produits vedettes</h2>
      <ProdContainer>
        {featuredProducts.map((product, id) => (
          <ProdWrapper key={id}>
            <ProdItem>
              <div>
                <ProdName>{product.name}</ProdName>
                <ProdDesc>{product.description}</ProdDesc>
                <ProdType>{product.type}</ProdType>
                <div>{product.inStock}</div>
              </div>
            </ProdItem>
          </ProdWrapper>
        ))}
      </ProdContainer>
    
    
*/ 