// import the data from data.js
const tableData =data;

// reference the html table using d3
var tbody = d3.select("tbody");

//building a table
function buildTable(data) {
    // first clear out any existing data
    tbody.html("");

    // next, loop through each objet in the data
    //and append a row and cells for each value in the row

    data.forEach((dataRow) =>{
        // append a row and cells for each object in the data
        let row = t.body.append("tr");

        // loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val)
        }
        );
    });
}

// if-statement syntax
// if ( condition ) { code to execute }
// pseudocode practice
// if (a date is entered) {
//     Filter the default data to show only the date entered
// };

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);




