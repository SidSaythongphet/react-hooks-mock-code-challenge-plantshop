import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// As a user:

// When the app starts, I can see all plants.
  //useEffect GET request DONE
// I can add a new plant to the page by submitting the form.
  //NewPlantForm useState DONE
// I can mark a plant as "sold out".
  //useState DONE
// I can search for plants by their name and see a filtered list of plants.

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
