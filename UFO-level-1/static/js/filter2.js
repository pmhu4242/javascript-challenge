var UFOSightings = data;

var button = d3.select("#filter-btn");

var inputField = d3.select("#datetime");

var output = d3.select("summary")



button.on("click", function() {
    console.log("Button clicked");
    console.log(d3.event.target);
});

button.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(UFOSightings);

    var filteredData = UFOSightings.filter(UFOSightings => UFOSightings.datetime === inputValue);
    d3.select("summary").text(inputValue);
    

    var list = d3.select(".summary");

    list.html("");

    list.append("li").text(filteredData);

    console.log(filteredData);
    console.log(list);

    for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
    };
    //  var dates = inputValue.map(inputValue);   
        
    data.forEach((value) => {
        var row = tbody.append("tr");
        Object.entries(value).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(key, value);

            });
        });
    });
