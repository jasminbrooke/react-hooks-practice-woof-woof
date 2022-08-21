import React from "react";

function Filter( {filterDogs} ) {
    return (
        <div>
            <div id="filter-div">
                <button 
                onClick={() => filterDogs()}
                id="good-dog-filter">Filter good dogs: OFF</button>
            </div>
        </div>
    )
}
    
    export default Filter;