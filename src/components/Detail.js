import React from "react";

function Detail( {selected} ) {
    const {id, image, name, isGoodDog} = selected

    const toggleGoodDog = (id) => {
        fetch(`http://localhost:3001/pups/${id}`, {
        method: 'PATCH',
        headers:{
        'Content-type' : 'application/JSON'}, 
        body: JSON.stringify({isGoodDog: !isGoodDog})   
    })
    .then(console.log(isGoodDog ? "good" : "bad"))
    .then(res => res.json())
    }

return (
    <div>
        <div id="dog-summary-container">
                <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={image} alt={name}/>
                <h2>{name}</h2>
                <button onClick={()=> toggleGoodDog(id)}> {isGoodDog ? "Good Dog!" : "Bad Dog!" }</button>
            </div>
        </div>  
    </div>
)


}

export default Detail;
