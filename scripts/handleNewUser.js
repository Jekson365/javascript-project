
var nameValue = document.querySelector(".name")
var ageValue = document.querySelector(".age")
var surnameValue = document.querySelector(".surname")

var addButton = document.querySelector(".sbuser")
var errorM = document.querySelector(".error")
var arr = JSON.parse(localStorage.getItem("data")) || []
var student = document.getElementById("student")
var forbidenVars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

errorM.classList.add("d-none")


const handleError = (errorMessage) => {

    errorM.classList.remove("d-none")
    errorM.innerHTML = errorMessage

}

var validate = true

class NewUser {
    constructor(name, surname, student, age, id) {
        this.name = name
        this.student = student
        this.surname = surname
        this.age = age
        this.id = id
    }

    addNewUser() {
        
        if (this.name.length <= 1 || this.surname.length <= 3) {
            handleError("name or surname must be longer than 3 characters")
            validate = false
            setTimeout(() => {
                handleError("")
                errorM.classList.add("d-none")
                validate = true
            }, 2000)
        }
        forbidenVars.map((char) => {
            if (this.name.includes(char) || this.surname.includes(char)) {

                handleError("invalid characters")
                setTimeout(() => {
                    handleError("")
                    errorM.classList.add("d-none")
                }, 2000)
                validate = false
            }
        })

        // push to localstorage
        if (validate) {
            arr.push(this)
            localStorage.setItem("data", JSON.stringify(arr))
            location.reload()
        }
    }
}


const handleSubmit = (e) => {
    e.preventDefault();

    var myNewUser = new NewUser(
        nameValue.value,
        surnameValue.value,
        student.checked ? true : false,
        Number(ageValue.value),
        Math.floor(Math.random() * 9999999)
    )
    
    myNewUser.addNewUser()

}

// remove button listener
const removeItems = (ID) => {

    arr = arr.filter((item) => {
        return item.id != ID
    })

    localStorage.setItem("data", JSON.stringify(arr))

    location.reload()
}

addButton.addEventListener("click", (e) => {
    handleSubmit(e)
})

export default removeItems