import React, { useState} from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant
  const [inStock, setInStock] = useState(true)

  const handleStockClick = () => setInStock(inStock => !inStock)

  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {inStock ? (
        <button className="primary" onClick={ handleStockClick }>In Stock</button>
      ) : (
        <button onClick={ handleStockClick }>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
