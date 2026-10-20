let students = [
    { name: "Akech", major: "Computer Science"},
    { name: "Deng", major: "Informatics"},
    { name: "Jacobs", major: "Arts&Visual Communication Design"},
    { name: "Dhiue", major: "Computer Science"},
    { name: "Samuel", major: "Management"}
];

function groupStudentsByMajor(students) {
    let group = {};

    for (let i = 0; i < students.length; i++) {
        let major  = students[i].major;

        if (group[major] === undefined) {
            group[major] = [];
        }

        group[major].push(students[i]);
    }

    return group;
}

let result = groupStudentsByMajor(students);

console.log(result);
console.log("Computer Science students:", result.Computer);