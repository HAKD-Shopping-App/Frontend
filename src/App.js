import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"

function App() {
  return (
    // <>
    //   <Navbar/>
    //   <Home/>
    //   <Products/>s
    // </>
    <BrowserRouter>
    <Routes>
    <Route path="/">
      <Route index element={<Home/>}/>
      <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
