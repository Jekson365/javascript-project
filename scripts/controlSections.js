var tabButtons = document.querySelectorAll(".tab")
var desks = document.querySelectorAll(".desk")

tabButtons.forEach((item)=> {
    item.addEventListener("click",(e)=> {
        var id = e.currentTarget.getAttribute("id")
        
        desks.forEach((desk)=> {
            var deskId = desk.getAttribute("id")
            desk.classList.remove("active")
            if (id == deskId) {
                desk.classList.add("active")
            }
        })

    })
})