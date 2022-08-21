import React, { useEffect, useState } from "react";
import Filter from "./Filter.js";
import DogBar from "./DogBar.js";
import Detail from "./Detail.js";


function App() {
  const [dogs, setDogs] = useState([])
  const [selected, setSelected] = useState({})
  const goodDogs = dogs.filter((dog) => dog.isGoodDog === true)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(res => res.json())
    .then(data => setDogs(data))
  }, []);
  
  const filterDogs = () => {
    setDogs(goodDogs)
  }
  

  return (
    <div className="App">
      <Filter selected={selected} goodDogs={goodDogs} filterDogs={filterDogs}/>
      <DogBar dogs={dogs} setSelected={setSelected}/>
      <Detail selected={selected}/>
      {/* <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar"></div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div> */}
    </div>
  );
}

export default App;
