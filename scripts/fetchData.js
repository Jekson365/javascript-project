import removeItems from "./handleNewUser";



const getData = async () => {
    const data = await JSON.parse(localStorage.getItem("data")) || []

    var count = 0;
    var table = document.querySelector(".table")
    var tbody = document.createElement("tbody")
    table.append(tbody)


    function checkStudent(ifStudent,td4) {

        if (ifStudent) {
            td4.classList.add("text-white")
            td4.classList.add("w-25")
            td4.classList.add("btn")
            td4.classList.add("bg-success")
        }
        if (!ifStudent) {
            td4.classList.add("text-white")
            td4.classList.add("w-25")
            td4.classList.add("btn")
            td4.classList.add("bg-danger")
        }
    }

    data.map((each) => {
        const { name, surname,student,id } = each
        count++;
        var removeButton = document.createElement("button")
        var th = document.createElement("th")
        var tr = document.createElement("tr")   
        var td = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        var td4 = document.createElement("td")


        checkStudent(student,td4)



        th.setAttribute("scope", "row")
        th.innerHTML = count;
        
        removeButton.classList.add("remove")

        removeButton.innerHTML = "remove"

        td.innerHTML = name
        td2.innerHTML = surname;
        td3.innerHTML = id
        td4.innerHTML = student
        td3.appendChild(removeButton)

        tr.appendChild(th)
        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td4)
        tr.appendChild(td3)
        
        tr.append(removeButton)

        // remove item
        removeButton.addEventListener("click",()=>removeItems(id))
        
        tbody.append(tr)

        tr.classList.add("tr-item")

    })


}

window.addEventListener("load", () => {
    getData()
})