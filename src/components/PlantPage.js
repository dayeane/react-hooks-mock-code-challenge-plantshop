import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants,setPlants] = useState([])

function addNewPlant(plant) {
  setPlants([...plants,plant])
  
}

useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(res => res.json())
  .then(setPlants)
}, [])
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
