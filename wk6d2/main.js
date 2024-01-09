
let mainTable = $("<table>");

for (let i = 0; i < 4; i++) {
    let row = $("<tr>");
    for (let j = 0; j < 4; j++) {
        let square = $('<td id="cell">')
        $(row).append(square)
    };
    $(mainTable).append(row)
};

$('#mainDiv').append(mainTable);


$('#mainDiv').on('click', '#cell', function() {
    $(this).toggleClass('lightCell')
});