var UFOSightings = data;

var button = d3.select("#button");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("click", runEnter); 

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    // console.log(inputValue);
    // console.log(UFOSightings);

    
    var filteredData = UFOSightings.filter(UFOSightings => UFOSightings.datetime === inputValue);
    console.log(filteredData);

};