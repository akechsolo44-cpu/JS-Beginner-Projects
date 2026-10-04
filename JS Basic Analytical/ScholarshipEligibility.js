const studentName = "Akech";
const averageScore = 86;
const attendance = 92;
const familyIncome = 4000000;
const organizationMember = true;

const basicRequirement =
    averageScore >= 80 && attendance >= 90;

const scholarshipCategory =
    basicRequirement && familyIncome <= 3000000 && organizationMember
        ? "Category A"
        : basicRequirement && familyIncome <= 5000000 && organizationMember
        ? "Category B"
        : "Not Eligible";

console.log(`
Student: ${studentName}
Average Score: ${averageScore}
Attendance: ${attendance}%
Family Income: Rp${familyIncome}
Organization Member: ${organizationMember}
Basic Requirement: ${basicRequirement ? "Passed" : "Failed"}
Scholarship Category: ${scholarshipCategory}
`);