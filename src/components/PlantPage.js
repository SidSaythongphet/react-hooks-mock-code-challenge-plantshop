import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")  

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(plantData => setPlants(plantData))
  }, [])

  const handleNewPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const filterPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm onSubmitNewPlant={ handleNewPlant }/>
      <Search setSearch={ setSearch } />
      <PlantList plants={ filterPlants }/>
    </main>
  );
}

export default PlantPage;
