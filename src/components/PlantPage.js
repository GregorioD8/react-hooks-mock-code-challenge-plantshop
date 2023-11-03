import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")
 
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setPlants(data)
    })
  }, [])
  
  function onNewPlantSubmit(newPlant) {
    setPlants([...plants, newPlant])

  }

  const filteredPlants = plants.filter((p) => p.name.toLowerCase().includes(searchInput.toLowerCase()))


  function onDelete(id) {
    const newPlants = plants.filter((p) => p.id !== id)
    setPlants(newPlants)
  }

  function onSearch(input) {
    setSearchInput(input)
  }
  
  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit}/>
      <Search searchInput={searchInput} onSearch={onSearch}/>
      <PlantList plants={filteredPlants} onDelete={onDelete}/>
    </main>
  );
}

export default PlantPage;
