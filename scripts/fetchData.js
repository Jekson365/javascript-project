import removeItems from "./handleNewUser";

const getData = async () => {
    const data = await JSON.parse(localStorage.getItem("data"))
    var count = 0;
    var table = document.querySelector(".table")
    var tbody = document.createElement("tbody")
    table.append(tbody)

    data.map((each) => {
        const { name, surname,id } = each
        count++;
        var removeButton = document.createElement("button")
        var th = document.createElement("th")
        var tr = document.createElement("tr")   
        var td = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        var td4 = document.createElement('td')

        th.setAttribute("scope", "row")
        th.innerHTML = count;
        
        removeButton.classList.add("btn")
        removeButton.classList.add("btn-danger")
        removeButton.innerHTML = "remove"

        td.innerHTML = name
        td2.innerHTML = surname;
        td3.appendChild(removeButton)

        tr.appendChild(th)
        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)

        tr.append(removeButton)
        // remove item
        removeButton.addEventListener("click",()=>removeItems(id))
        
        tbody.append(tr)

    })


}

window.addEventListener("load", () => {
    getData()
})