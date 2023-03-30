
class UserRow {
    constructor(first, last, student, id, count) {
        this.first = first
        this.last = last
        this.student = student
        this.id = id
        this.count = count
    }

    drawElement() {
        var mainTableBody = document.querySelector(".main-table-body")

        mainTableBody.innerHTML += `<tr class="tr-item">
                <th scope="row" >${this.count}</th>
                    <td>${this.first}</td>
                    <td>${this.last}</td>
                    <td>
                    <buttuon class="btn ${this.student ? "btn-success" : "btn-danger"}">${this.student}</button></td>
                    <td>${this.id}</td>
                <td>
                <button class="btn btn-danger remove" id='remove'>Remove</button>
            </td>
        </tr>`
    }


}

export default UserRow