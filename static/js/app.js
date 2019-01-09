var tbody = document.querySelector("tbody");
var dateIn = document.querySelector("#datetime");
var searchButton = document.querySelector("#filter-btn");

searchButton.addEventListener("click", function(event) {
  handleSearchButtonClick(event)
});

var cleanedData = data;

function renderTable() {
    tbody.innerHTML = "";
   
    for (var i = 0; i < cleanedData.length; i++) {
  
      var sightings = cleanedData[i];
      var columns = Object.keys(sightings);
      
      var row = tbody.insertRow(i);
      for (var j = 0; j < columns.length; j++) {
        
        var column = columns[j];
        var cell = row.insertCell(j);
        cell.innerText = sightings[column];
      }
    }
  }
  
function handleSearchButtonClick(event) {
    event.preventDefault();

    var dateResults = dateIn.value.trim();
    
    if (dateResults.length != 0) {
        cleanedData = data.filter(function(sightings) {
            var sightingsDate = sightings.datetime;
            return sightingsDate === dateResults;
        });
    }

    renderTable();
}

renderTable();
