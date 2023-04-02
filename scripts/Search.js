
var userInput = document.getElementById("user-search")
var searched = document.querySelector(".searched")
var searchedText = document.querySelector(".table-searched-body")
var start = document.querySelector(".start")

// filter on;y students

var data = []
async function load() {
    data = await JSON.parse(localStorage.getItem('data'))
}
load()

var filterOnlyStudents = document.getElementById("filter-student")

filterOnlyStudents.addEventListener("click", () => {
    if (filterOnlyStudents.checked) {
        var students = []
        data.map((each)=> {
            if (each.student) {
                students.push(each)
            }
        })
        displayFilteredData(students)
    }
    else {
        displayFilteredData(JSON.parse(localStorage.getItem("data")))
    }
})

window.addEventListener("load", () => {
    displayFilteredData(data)
})


userInput.addEventListener("input", () => {
    var filtered = []
    data.filter((each) => {
        const { name, surname, id } = each
        if (name.includes(userInput.value) || surname.includes(userInput.value) || String(id).includes(userInput.value)) {
            filtered.push(each)
        }
    })

    displayFilteredData(filtered)

})


// dispaly filteredDat Function
function displayFilteredData(arr) {
    searchedText.innerHTML = arr.map((each) =>
        `<tr>
            <th>${each.name}</th>
            <th>${each.surname}</th>
            <th>${each.student}</th>
            <th>${each.id}</th>
        </tr>`
    ).join('')
}