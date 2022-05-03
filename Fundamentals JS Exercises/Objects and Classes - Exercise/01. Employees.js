function Employees(array) {
    let employees = [];

    for (const employee of array) {
        employees.push({
            name: employee,
            pNumber: employee.length
        });
    }

    employees.forEach(x => console.log(`Name: ${x.name} -- Personal Number: ${x.pNumber}`))
}


Employees([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]);

