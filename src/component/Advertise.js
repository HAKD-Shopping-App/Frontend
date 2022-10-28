import React from 'react';
import './advertise.css'
import NavbarLogout from './NavbarLogout';
import { Link } from "react-router-dom";



function Advertise() {
    let products = Array.from(Array(10).keys());
    return (
        <div className="landingpage-main-container">
            <NavbarLogout/>
            
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
                            <img src={require('../assets/clothing_1.jpg')} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">MEN’S WATCHES</h5>
                                <p class="card-text">Casio Analog Black Dial Men's Watch</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">LKR 1620.48</li>
                                <li class="list-group-item">Quantity : 50</li>
                            </ul>
                            <div class="card-body">

                                <a href="AddNewProduct" class="btn btn-primary" style={{ backgroundColor: "#aa92df", borderStyle: "none", float: "left" }}>Edit</a>

                                <a href="#" class="btn btn-primary" style={{ backgroundColor: "#FF0000", borderStyle: "none", float: "right" }}>Remove</a>
                            </div>
                        </div>
                    })}
                </div>



            </div>
        </div>
    );
}

export default Advertise;