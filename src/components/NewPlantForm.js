import React, { useState } from "react";

function NewPlantForm({ onSubmitNewPlant }) {
  const [newPlantData, setNewPlantData] = useState({
    name: "",
    image: "",
    price: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepted": "application/json"
      },
      body: JSON.stringify(newPlantData)
    })
      .then(resp => resp.json())
      .then(newPlant => {
        onSubmitNewPlant(newPlant)
        e.target.reset()
      })
  }

  const handleChange = (e) => {
    setNewPlantData({
      ...newPlantData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="name" placeholder="Plant name" onChange={ handleChange }/>
        <input type="text" name="image" placeholder="Image URL" onChange={ handleChange } />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={ handleChange } />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
