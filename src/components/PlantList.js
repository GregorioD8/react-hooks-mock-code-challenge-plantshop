import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDelete }) {

  const plantCards = plants.map((p) => (
    <PlantCard
    key={p.id}
    plant={p}
    onDelete={onDelete}
    />
  ))
  
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantCards}
    </ul>
  );
}

export default PlantList;


