import React from 'react';
import './advertise.css'
import NavbarLogout from './NavbarLogout';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';


function Advertise() {
    //let products = Array.from(Array(10).keys());
    const [products, setProducts] = useState([]);
    const [pId, setPId] = useState('');
    useEffect(() => {
        axios.get('http://localhost:3000/products').then((response) => { setProducts(response.data) })
    }, [])

    const DeletePro = (id) => {
        useEffect(() => { axios.delete(`http://localhost:3000/product/${id}`) })
    }
    return (
        <div className="landingpage-main-container">
            <NavbarLogout />

            <div className="landingpage-body d-flex flex-column p-4">

                <ul class="navbar-nav align-items-left">
                    <li class="nav-item">
                        <Link to='/AddNewProduct' className="btn btn-primary">Add New Products</Link>
                    </li>
                </ul>
                <br></br>
                <h3>Your Products</h3>

                <div className='products-list d-flex flex-wrap p-4 gap-4 justify-content-start'>
                    {products.map((item, index) => {
                        return <div class="card product-card" style={{ width: '18rem' }}>
                            <img src={item.image} class="card-img-top" alt="" style={{ 'height': "18rem" }} />
                            <div class="card-body">
                                <h5 class="card-title">{item.product_name}</h5>
                                <p class="card-text">Casio Analog Black Dial Men's Watch</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">price: LKR {item.price}</li>
                                <li class="list-group-item">quantity: {item.quantity}</li>
                            </ul>
                            <div class="card-body" style={{ 'justifyContent': "space-around" }}>

                                <Button type="submit" variant="outlined" color="success" >Update</Button>
                                <Button type="submit"  variant="outlined" color="error">Delete</Button>
                                {/* onClick={axios.delete(`http://localhost:3000/product/${item._id}`)} */}
                            </div>
                        </div>
                    })}
                </div>



            </div>
        </div>
    );
}

export default Advertise;