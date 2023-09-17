import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { products } from "./mock/product";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <Header />
   
      <Main product={products}/>
  
    
    </>
  );
}


export default App;
