var deleteBtn2 = document.querySelector(".deleteee")
var deleteWindow = document.querySelector(".delete-window")
var yes = document.querySelector(".yes")
var no = document.querySelector(".no")
deleteBtn2.addEventListener("click",()=> {
    deleteWindow.classList.toggle("on")
})

yes.addEventListener("click",()=> {
    deleteWindow.classList.remove("on")
    localStorage.removeItem("data")
    location.reload()
})
no.addEventListener("click",()=> {
    deleteWindow.classList.remove("on")
})