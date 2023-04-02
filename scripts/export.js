
var exportButton = document.getElementById("toexcel")
var table = document.getElementById("main-table")


exportButton.addEventListener("click", () => {
    document.querySelectorAll(".active").forEach((item)=> {
        item.classList.remove("active")
    })

    document.querySelectorAll(".desk")[1].classList.add("active")

    var table2excel = new Table2Excel();
    table2excel.export(document.getElementById("main-table"));
})