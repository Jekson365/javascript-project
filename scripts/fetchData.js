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
        
        var removeButton = document.querySelectorAll(".removeee")


        for (var i = 0;i < removeButton.length;i++) {   
            removeButton[i].addEventListener("click",(e)=> {
                removeItems(e.currentTarget.id)
            })
        }
    })
}





window.addEventListener("load", () => {
    getData()
})