// var button = d3.select("#filter-btn");

// var inputDate = d3.select("#datetime-input");

// function handleClick() {
//     console.log("Filtering Data")

//     console.log(d3.event.target);

// }

// button.on("click", handleClick);

// button.on("click", function() {
//     d3.select("#form-control").text()
// })

// inputDate.on("change", function() {
//     var newDate = d3.event.target.value;
//     console.log(newDate);
// });

var UFOSightings = data;

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);


function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(UFOSightings);

    
    var filteredData = UFOSightings.filter(UFOSightings => UFOSightings.datetime === inputValue);
    var fData = d3.select(".Summary")

    data.forEach(function(filteredData) { 
        console.log(filteredData);        
        
    })

    

    
}