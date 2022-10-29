import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import {AddShoppingCart} from '@mui/icons-material'
import useStyles from './styles'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context";

const ProductSingle = ({product}) => {
    const { items, setItems } = useContext(Context);
    const clickHandler = () => {
        setItems((prevcount) => prevcount + 1);
    };

  const classes = useStyles();
  
  return (
    <div>
        <Card className = {classes.root}>
            <CardMedia className= {classes.media} image = {product.image} title = {product.product_name} />

            <CardContent>
                <div className = {classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.brand}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant='body2' color="textSecondary">{product.band_colour} </Typography>
                
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                
                <IconButton onClick={clickHandler} aria-label=' Add to card' > <AddShoppingCart /></IconButton>
                Count:{items}
            </CardActions>
        </Card>
    </div>
  )
}

export default ProductSingle