var date = data;

var button = d3.select("#button");

var form = d3.select("#form")


// button.on("click", function() {
//     console.log(d3.event.target);

// });

// button.on("click", function() {
//     d3.select("#datetime");
// });

// inputField.on("change", function() {
//     var newDate = d3.event.target.value;
//     console.log(newDate);
// });

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(date);

    var filteredData = date.filter(datetime => datetime.datetime === inputValue);

    console.log(filteredData);

    var datetimes = filteredData.map(datetime => datetime.datetime);

    var list = d3.select(".summary");

    list.html("");

    list.append("li").text('${datetime}');

};