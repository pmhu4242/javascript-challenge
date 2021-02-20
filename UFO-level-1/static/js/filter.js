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

var button = d3.select("#button");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("click", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(UFOSightings);

   

   
    var filteredData = UFOSightings.filter(Sightings => Sightings.datetime === inputValue);
   
    data.push(["Summary"])
   console.log(filteredData);

   
;

   
      
     
   

    
       // var list = d3.select("summary")

    // list.html("");
    // list.append("li").text(filteredData)


    // var list = d3.select("sum-table");
    // list.html("");

    


    // data.forEach(function(filteredData) {
    //     console.log(filteredData);
    //     var row = tbody.append("tr");

    //     Object.entries(filteredData).forEach(function([key, value]) {})
    };





    // var filteredData = UFOSightings.filter(UFOSightings => UFOSightings.datetime === inputValue);

    // console.log(filteredData);


    // var date = filteredData.map(UFOSightings => UFOSightings.datetime)

    // var list = d3.select(".summary");

    // list.html("");

    // list.append("li").text(inputValue);


