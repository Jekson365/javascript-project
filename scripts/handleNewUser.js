
var nameValue = document.querySelector(".name")
var surnameValue = document.querySelector(".surname")
var addButton = document.querySelector(".sbuser")
var errorM = document.querySelector(".error")
var arr = JSON.parse(localStorage.getItem("data")) || []
var forbidenVars = ['!','@','#','$','%','^','&','*','(',')']
errorM.classList.add("d-none")

const handleError = (errorMessage) => {
    errorM.classList.remove("d-none")
    errorM.innerHTML = errorMessage
}

var validate = true


const handleSubmit = (e) => {
    e.preventDefault();

    var result = {
        name: "",
        surname: "",
        id: Math.floor(Math.random() * 10000000)
    }



    result.name = nameValue.value
    result.surname = surnameValue.value


    // validation 
    
    if (result.name.length <= 3 || result.surname.length <= 3 ) {
        handleError("name or surname must be longer than 3 characters")
        validate = false
        setTimeout(()=> {
            handleError("")
            errorM.classList.add("d-none")
            validate = true
        },2000)
    } 
    forbidenVars.map((char)=> {
        if (result.name.includes(char) || result.surname.includes(char)) {
            handleError("invalid characters")
            setTimeout(()=> {
                handleError("")
                errorM.classList.add("d-none")
            },2000)
            validate = false
        }
    })


    // push to localstorage
    if (validate) {
        arr.push(result)
        localStorage.setItem("data", JSON.stringify(arr))
        location.reload()
    } 



}

// remove button listener
const removeItems = (id) => {
    arr = arr.filter((item) => {
        return item.id != id
    })
    localStorage.setItem("data", JSON.stringify(arr))
    location.reload()
}

addButton.addEventListener("click", (e) => {
    handleSubmit(e)

    // save to localstorage

    // localStorage.setItem("data",JSON.stringify(result))
})

export default removeItems