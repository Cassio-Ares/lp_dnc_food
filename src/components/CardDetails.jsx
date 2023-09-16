import "./CardDetails.css";

export const CardDetails = ({ product }) => {
  return (
    <div className="Container_cardDetails">
      <h3>{product.Name}</h3>
      <p>{product.Description}</p>
      <p>{product.Price}</p>
    </div>
  );
};
