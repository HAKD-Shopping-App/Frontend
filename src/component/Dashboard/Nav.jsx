import React from 'react';
import Home from './Dashboard';
//import Cart from './Cart'

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context";

const Navbar = () => {
    const { items, setItems } = useContext(Context);
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light navbar-light bg-light py-3 shadow-sm">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-3" href="/">HAKD Collection</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="dashboard">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="products">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form class="d-flex me-5" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                        <div className="buttons">
                            <a href="" className="btn btn-outline-dark">
                                <i className="fa fa-shopping-cart me-1"></i>Cart ({items})</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;