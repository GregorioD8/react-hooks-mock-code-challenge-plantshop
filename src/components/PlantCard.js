import React, { useState } from "react";

function PlantCard({ plant, onDelete }) {
const { name, image } = plant
const [isInStock, setIsInStock] = useState(true)
const [price, setPrice] = useState(plant.price)

const handleIsInStockClick = () => {
setIsInStock(!isInStock)
}
function handleDelete() {
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: "DELETE"
  })
  .then((res) => res.json())
  .then(() => onDelete(plant.id))
}

function handleNewPrice(e) {
  e.preventDefault()
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify({ price: parseFloat(price) }),
  })
}

  return (
    <li className="card" >
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <form onSubmit={handleNewPrice}>
        <input onChange={(e) => setPrice(e.target.value)} type="text" value={price}/>
      </form>
      {isInStock ? (
        <button 
        onClick={handleIsInStockClick}
        className="primary"
        >
        In Stock
        </button>
      ) : (
        <button
        onClick={handleIsInStockClick}
        >
        Out of Stock
        </button>
     
      )}
        <button
        onClick={handleDelete}
        >
        Delete
        </button>
    </li>
  );
}

export default PlantCard;
