import React from "react";

function DogBar({ dogs, setSelected }) {
    const handleClick = (dog) => {
        setSelected(dog)
    } 
    const dogList = dogs.map((dog, i) => (
        <span key={i} dog={dog} onClick={() => handleClick(dog)}> 
            {dog.name} 
        </span>
    ));

    return (
        <div>
            <div id="dog-bar">{dogList}</div>
        </div>
    )    
//       
//       <div id="dog-summary-container">
//         <h1>DOGGO:</h1>
//         <div id="dog-info"></div>
//       </div> */}
    }
    
    export default DogBar;