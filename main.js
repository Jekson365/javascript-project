// const names = ["gocha", "nika", "zviadi", "nugzari", "lela", "maka"]
// const surnames = ["chkadua", "akhmeteli", "zviadauri", "ergemlidze", "samanishvili","kaka"]
// var student = [false, true]
// var full = []

// for (var i = 0; i <5; i++) {
//     for (var k = 0; k < 5; k++) {
//         full.push(
//             {
//                 name: names[i],
//                 surname: surnames[k],
//                 student: student[Math.floor(Math.random() * 2)],
//                 id: Math.floor(Math.random() * 1000000)
//             }
//         )
//     }
// }
// console.log(full)
// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }

// shuffleArray(full)

// if (!localStorage.getItem("data")) {
//     localStorage.setItem("data", JSON.stringify(full))
// }