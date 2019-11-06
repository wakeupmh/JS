const students = [
    { name: 'João', exam: 7.3, scholarship_holder: true },
    { name: 'Luis', exam: 4.3, scholarship_holder: false },
    { name: 'Ludmila', exam: 5.3, scholarship_holder: true },
    { name: 'Lucas', exam: 8.0, scholarship_holder: true },
    { name: 'Anderson', exam: 9.0, scholarship_holder: false },
    { name: 'Caio', exam: 5.3, scholarship_holder: true },
];

// Challenge 1: Do Students are scholarship holder?
const allScolarship = (result, scholarship_holder) => result && scholarship_holder;
const result = students.map(s => s.scholarship_holder).reduce(allScolarship);

// Challenge 2: Do Someone are scholarship holder?
const someoneScolarship = (result, scholarship_holder) => result || scholarship_holder;
const result = students.map(s => s.scholarship_holder).reduce(someoneScolarship);