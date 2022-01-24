import React, { useState} from "react";

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  const { name, image, price } = plant
  const [inStock, setInStock] = useState(true)
  const [onEdit, setOnEdit] = useState(false)
  const [editPrice, setPrice] = useState({price: ""})

  const handleStockClick = () => setInStock(inStock => !inStock)
  const handleOnEdit =() => setOnEdit(onEdit => !onEdit)

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(() => onDeletePlant(plant))
  }

  const handleEditClick = (e) => {
    e.preventDefault()

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepted": "application/json"
      },
      body: JSON.stringify({price: parseFloat(editPrice, 10)})
    })
      .then(resp => resp.json())
      .then((newEdit) => {
        onUpdatePlant(newEdit)
        handleOnEdit()
      })    
  }

  const handleChange = (e) => {
    setPrice(e.target.value)
  }


  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      {!onEdit ? 
        <p onClick={ handleOnEdit }>Price: { price }</p> 
        : 
        <>
          <form onSubmit={ handleEditClick }>
            <input type="number" name="price" step="0.01" placeholder="Price" onChange={ handleChange }/>
            <button>Edit</button>
          </form>
        </>
        }
      {inStock ? (
        <button className="primary" onClick={ handleStockClick }>In Stock</button>
      ) : (
        <button onClick={ handleStockClick }>Out of Stock</button>
      )}
      <button onClick={ handleDeleteClick }>Remove</button>
    </li>
  );
}

export default PlantCard;
