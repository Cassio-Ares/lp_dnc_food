import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { products } from "./mock/product";
import { Cards } from "./components/Cards";

function App() {
  return (
    <>
      <Header />

      {products.map((product) => (
        <div key={product.Id}>
          <Cards product={product} />
        </div>
      ))}
    </>
  );
}

export default App;
