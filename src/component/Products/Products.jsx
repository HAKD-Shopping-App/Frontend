import React from "react";
import { Grid } from '@mui/material';
import Navbar from '../Navbar';
import { useState, useEffect } from "react";
import axios from "axios";

import Product from './ProductSingle'
//for now

//console.log(product)
const Products =()=>{
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/product').then((response)=>{setProduct(response.data)})
      }, [])
    return(
        <div>
            < Navbar /> <br />
        
        <main>
            <Grid container justifyContent= 'center' spacing={4}>
                {product.map((product) => (
                    <Grid item key ={product._id} xs ={12} sm = {6} md = {4} lg = {3}> 
                        <Product product = {product} />
                    </Grid>
                ))}

            </Grid>
        
        </main>
        </div>
    )
}


export default Products