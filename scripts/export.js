
var exportButton = document.getElementById("toexcel")
var table = document.getElementById("main-table")


exportButton.addEventListener("click", () => {
    var table2excel = new Table2Excel();
    table2excel.export(document.getElementById("main-table"));
})