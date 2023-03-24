
var nameValue = document.querySelector(".name")
var surnameValue = document.querySelector(".surname")
var addButton = document.querySelector(".sbuser")

var arr = JSON.parse(localStorage.getItem("data")) || []



var onlyLetters = /^[a-zA-Z]+$/




const handleSubmit = (e) => {


    var result = {
        name: "",
        surname: "",
        id: Math.random() * 10000
    }



    result.name = nameValue.value
    result.surname = surnameValue.value



    location.reload()
    if (onlyLetters.test(result.name)) {
        arr.push(result)
        localStorage.setItem("data", JSON.stringify(arr))

    }

}
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