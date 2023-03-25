var userInput = document.getElementById("user-search")
var searched = document.querySelector(".searched")

userInput.addEventListener("change", (e) => {
    var data = JSON.parse(localStorage.getItem("data"))
    var inputValue = e.currentTarget.value
    
    data.filter((each) => {
        each.name.includes(inputValue)
    })
    

    var filteredArray = data.filter((each) => { return each.name.includes(inputValue) }) || []

    var allRemoveThis = document.getElementsByClassName("removethis")

    
    
    
    filteredArray.map((each)=> {
        const {name,surname,id} = each
        var tr = document.createElement("tr")
        var td = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        
        
        td.innerHTML = name
        td2.innerHTML = surname;
        td3.innerHTML = id
        
        document.querySelector(".searched").appendChild(tr)
        tr.classList.add("removethis")

        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        
        
    })
    
    for (var i = 0;i < allRemoveThis.length;i++) {
        allRemoveThis[0].remove()
    }
    
})