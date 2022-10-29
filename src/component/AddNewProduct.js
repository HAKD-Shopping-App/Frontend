import React, { useEffect, useState } from 'react';
import './advertise.css'
import NavbarLogout from './NavbarLogout';
import { Link } from "react-router-dom";
import axios from 'axios'

function AddNewProduct() {

    const [name, setName] = useState('');
    const [bName, setBName] = useState('');
    const [cat, setCat] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const addPro = () => {
        axios.post('http://localhost:3000/product', { name, bName, cat, price, quantity }).then()
    }

    return (
        <div className="landingpage-main-container">
            <NavbarLogout />
            <div className="landingpage-body d-flex flex-column p-4">

                <ul class="navbar-nav align-items-left">
                    <li class="nav-item">
                        <Link to='/Advertise' className="btn btn-primary">View Your Products</Link>
                    </li>
                </ul>

                <div className='form-card d-flex justify-content-center'>

                    <div className='form-details d-flex flex-column p-4 gap-4'>
                        <h3>Add new Product to Sell</h3>
                        <form>


                            <div class="form-group row mb-3">
                                <label for="inputProduct" class="col-sm-2 col-form-label">Product Name</label>
                                <div class="col-sm-10 mb-3">
                                    <input type="product" class="form-control" id="inputProduct" placeholder="Product Name" onChange={e => setName(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="inputBrandName" class="col-sm-2 col-form-label">Brand Name</label>
                                <div class="col-sm-10 mb-3">
                                    <select class="form-select" aria-label="Default select example" onChange={e => setBName(e.target.value)}>
                                        <option selected>Brand Name</option>
                                        <option value="Rolex">Rolex</option>
                                        <option value="Titan">Titan</option>
                                        <option value="Casio">Casio</option>
                                    </select></div>
                            </div>
                            <fieldset class="form-group mb-3">
                                <div class="row">
                                    <legend class="col-form-label col-sm-2 pt-0">Category</legend>
                                    <div class="col-sm-10">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" onClick={e => setCat('men')} />
                                            <label class="form-check-label" for="gridRadios1">
                                                Men
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" onClick={e => setCat('women')} />
                                            <label class="form-check-label" for="gridRadios2">
                                                Women
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="form-group row mb-3">
                                <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
                                <div class="col-sm-10 mb-3">
                                    <input type="price" class="form-control" id="inputPrice" placeholder="Price" onChange={e => setPrice(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="inputQuantity" class="col-sm-2 col-form-label">Quantity</label>
                                <div class="col-sm-10 mb-3">
                                    <input type="quantity" class="form-control" id="inputQuantity" placeholder="Quantity" onChange={e => setQuantity(e.target.value)} />
                                </div>
                            </div>

                            <div class="form-group row mb-3">
                                <div class="col-sm-10 mb-3">
                                    <button type="submit" class="btn btn-primary" onClick={addPro}>Add</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AddNewProduct;