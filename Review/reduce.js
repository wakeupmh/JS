const students = [
    { name: 'João', exam: 7.3, scholarship_holder: true },
    { name: 'Luis', exam: 4.3, scholarship_holder: false },
    { name: 'Ludmila', exam: 5.3, scholarship_holder: true },
    { name: 'Lucas', exam: 8.0, scholarship_holder: true },
    { name: 'Anderson', exam: 9.0, scholarship_holder: false },
    { name: 'Caio', exam: 5.3, scholarship_holder: true },
];

const result = students.map(s => s.exam).reduce((acc, act) => {
    return acc + act;
});

const result = students.map(s => s.exam).reduce((acc, act) => {
    return acc + act;
}, 10); // with initial value