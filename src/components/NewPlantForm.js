import React, { useState } from "react";

function NewPlantForm( { onNewPlantSubmit }) {

const [name, setName] = useState("")
const [image, setImage] = useState("")
const [price, setPrice] = useState(0)


const handleSubmit = (e) => {
  e.preventDefault()
  
  const newPlant = {
    name: name, 
    image: image, 
    price: parseFloat(price),
  }
  
  fetch("http://localhost:6001/plants", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    }, 
    body: JSON.stringify(newPlant),
  })
  .then((res) => res.json())
  .then((data) => onNewPlantSubmit(data))
}

  return (
    <div className="new-plant-form" onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
