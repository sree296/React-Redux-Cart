import React, {useEffect} from "react";
import axios from 'axios';
import ProductListItem from './ProductListItem';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
              .get("https://fakestoreapi.com/products")
              .catch((err) => {console.log(err)});
              console.log(response.data);
              return dispatch(setProducts(response.data));            
    }; 

    useEffect(()=>{
        fetchProducts()
    },[]);

    return ( 
    <div className="ui grid container">
        <ProductListItem />
    </div>
    )
}
export default ProductListing;