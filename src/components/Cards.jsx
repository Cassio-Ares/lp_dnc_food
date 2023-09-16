import { useState } from "react";
import { CardDetails } from "./CardDetails";
import "./Cards.css";

export const Cards = ({ product }) => {
  const [show, setShow] = useState(false);

  function mouseIn() {
    setShow(true);
  }

  function mouseOut() {
    setShow(false);
  }
     
  return (
    <div onMouseEnter={mouseIn} onMouseOut={mouseOut}>
      <div className="Container_card" >
        <img src={product.Img} alt={product.Name} />
        <div className="container_text">
          <h3>{product.Name}</h3>
          <button>Adicionar</button>
        </div>
      </div>
      {show === true && (
        <div className="Container_card_des">
          <CardDetails product={product} />
        </div>
      )}
    </div>
  );
};
