var nameval,surnameval,idval,submitChange,ifStudent,ageVal

nameval = document.querySelector(".nameval")
surnameval = document.querySelector(".surnameval")
idval = document.querySelector(".idval")
submitChange = document.querySelector(".submitChange")
ifStudent = document.getElementById("ifstudent")
ageVal = document.querySelector(".ageval")

var pickedData
var data = JSON.parse(localStorage.getItem("data"))


// change value in input fileds
idval.addEventListener("input",(e)=> {
    // find value in data by id
    data.map((each)=> {
        if (each.id == idval.value) {
            pickedData = each
        }
        else {
            // if id not found!
            console.log("no user found")
            nameval.value = ""
            surnameval.value = ''
            ageVal.value = ''

        }
    })
    if (pickedData != undefined) {
        nameval.value = pickedData.name
        surnameval.value = pickedData.surname
        ageVal.value = pickedData.age
    }
})

// submit change
submitChange.addEventListener("click",()=> {

    var changedName = nameval.value
    var changedSurname = surnameval.value
    var ID = idval.value
    var changedAge = ageVal.value
    var changedStudent = ifStudent.checked ? true : false

    var editedData = data.map((item)=> {
        if (item.id == ID) {
            item.name = changedName
            item.surname = changedSurname
            item.id = Number(ID)
            item.age = Number(changedAge)
            item.student = changedStudent
        }
        else {
            console.log("no user found")
        }
        return item
    })

    // save to local storage
    localStorage.setItem("data",JSON.stringify(editedData))


})
