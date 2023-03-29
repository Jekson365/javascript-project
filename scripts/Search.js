
var userInput = document.getElementById("user-search")
var searched = document.querySelector(".searched")
var searchedText = document.querySelector(".table-searched-body")
var start = document.querySelector(".start")



var data = []
async function load() {
    data = await JSON.parse(localStorage.getItem('data'))
}
load()


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
    searchedText.innerHTML = arr.map(each => 
        `<tr>
            <th>${each.name}</th>
            <th>${each.surname}</th>
            <th>${each.id}</th>
        </tr>`
    ).join('')
}