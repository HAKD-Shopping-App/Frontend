import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Products from './component/Products/Products';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Dashboard  from './component/Dashboard/Dashboard';
import Men from './component/Men';
import Women from './component/Women'


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
        <Route path="/Products" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
