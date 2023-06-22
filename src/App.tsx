import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={ <Product/> }/>
        <Route path={"/basket"} element={ <Basket/> }/>
        <Route path={"/favorite"} element={ <Favorite/> }/>
      </Routes>
    </div>
  );
}

export default App;
