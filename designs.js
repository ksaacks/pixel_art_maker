// function to handle click in grid once created
// changes color of single cell
function respondToClick(evnt) {
  evnt.preventDefault();
  var colorSelected = document.querySelector("#colorPicker").value;
  if (evnt.target.tagName === 'TD') {
    evnt.target.style.backgroundColor = colorSelected;
  };
};

//adding listener event to the design canvas
var colorTable = document.querySelector("#pixelCanvas");
colorTable.addEventListener("click", respondToClick);

// When size is submitted by the user, call makeGrid()
var selection = document.querySelector("#sbtn");
selection.addEventListener("click", function(evt) {
  // prevent submit event from refreshing page
  evt.preventDefault();
  //remove existing talbe to be replaced wih new table
  var rem = document.querySelectorAll("tr");
  rem.forEach(function(r) {
    r.remove();
  })
  makeGrid();
});

// function to build the grid by adding table rows and table columns
function makeGrid() {
  var gridHeight = document.querySelector("#inputHeight").value;
  var gridWidth = document.querySelector("#inputWidth").value;
  for (row = 0; row < gridHeight; row++) {
    var newRow = document.createElement("tr");
    document.querySelector("#pixelCanvas").appendChild(newRow);
    for (col = 0; col < gridWidth; col++) {
      var newCol = document.createElement("td");
      newRow.appendChild(newCol);
    };
  };
};
