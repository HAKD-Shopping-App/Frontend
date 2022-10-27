import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Products from './component/Products/Products';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>
    //   <Navbar/> 
    //   <Home/>
    //   <Products/>
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Home/>} />
        <Route path="/Products" element={<Products/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
