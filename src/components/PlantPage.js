import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants,setPlants] = useState([])
const [allPlants, setAllPants] = useState([])
function addNewPlant(plant) {
  setPlants([...plants,plant])
  
}

function searchList(e) {
  const filteredPlants = allPlants.filter((plant) => {
    return plant.name.includes(e.currentTarget.value)
  })
  setPlants(filteredPlants)
}

useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(res => res.json())
  .then((data)=>{
    setPlants(data)
    setAllPants(data)
  })
}, [])
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search searchList={searchList}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
