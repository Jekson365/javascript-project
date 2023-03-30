const names = ["gocha", "nika", "zviadi", "nugzari", "lela", "maka", "mariami", "lola", "shalva", "gurjistani", "jeko", "gia", "ucha"]
const surnames = ["chkadua", "akhmeteli", "zviadauri", "ergemlidze", "samanishvili", "rustaveli", "gociridze", "alania", "gorgadze"]
var student = [false, true]
var full = []

for (var i = 0; i < names.length; i++) {
    for (var k = 0; k < names.length; k++) {
        full.push(
            {
                name: names[i],
                surname: surnames[k],
                student: student[Math.floor(Math.random() * 2)],
                id: Math.floor(Math.random() * 1000000)
            }
        )
    }
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(full)

localStorage.setItem("data", JSON.stringify(full))