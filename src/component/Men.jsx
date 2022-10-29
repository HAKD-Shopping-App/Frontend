import React from "react";
import { Grid } from '@mui/material';
import Navbar from './Dashboard/Nav';
import { useState, useEffect } from "react";
import axios from "axios";

import Product from './Products/ProductSingle'
//for now

const Products =()=>{
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/products/men').then((response)=>{setProduct(response.data)})
      }, [])
    return(
        <div>
            < Navbar /> <br />
        
        <main>
            <Grid container justifyContent= 'center' spacing={4}>
                {product.map((product) => (
                    <Grid item key ={product.id} xs ={12} sm = {6} md = {4} lg = {3}> 
                        <Product product = {product} />
                    </Grid>
                ))}

            </Grid>
        
        </main>
        </div>
    )
}


export default Products