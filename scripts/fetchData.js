import removeItems from "./handleNewUser";
import UserRow from "./userObject";



const getData = async () => {
    const data = await JSON.parse(localStorage.getItem("data")) || []

    var count = 0;

    data.map((each) => {
        const { name, surname, student, id } = each
        count++
        var eachUserObject = new UserRow(name, surname, student, id, count)


        eachUserObject.drawElement()
        var removeButton = document.querySelectorAll(".remove")


        // remove 
        removeButton.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                console.log(id)
                removeItems(id)
            })
        })
    })


}

window.addEventListener("load", () => {
    getData()
})