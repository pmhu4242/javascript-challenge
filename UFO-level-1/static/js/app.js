// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData);

data.forEach(function(UFOSightings) {
    console.log(UFOSightings);
});

data.forEach(function(UFOSightings) {
    var row = tbody.append("tr");
    Object.entries(UFOSightings).forEach(([key, value]) => {
        row.append("td").text(value);
    });
});

data.forEach(function(UFOSightings) {
    console.log(UFOSightings);
    var row = tbody.append("tr");

    Object.entries(UFOSightings).forEach(function([key, value]) {
        console.log(key, value);
    });
});

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(UFOSightings) {
    console.log(UFOSightings);
    var row = tbody.append("tr");

    Object.entries(UFOSightings).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
    });
});

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(function(UFOSightings) {
    console.log(UFOSightings);
    var row = tbody.append("tr");
    Object.entries(UFOSightings).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
    });
});