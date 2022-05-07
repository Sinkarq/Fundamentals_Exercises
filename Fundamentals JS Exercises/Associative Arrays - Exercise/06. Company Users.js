function Solve(input) {
    let management = new Map();

    for (const employee of input) {
        let [company, personalIdentificator] = employee.split(" -> ");
        if (management.has(company)) {
            let existingEmployees = management.get(company);
            if (!existingEmployees.includes(personalIdentificator)) {
                existingEmployees.push(personalIdentificator);
            }
        }
        else {
            management.set(company, []);
            let existingEmployees = management.get(company);
            existingEmployees.push(personalIdentificator);
        }
    }

    let output = new Map([...management.entries()].sort());

    for (const [company, employees] of output) {
        console.log(company)
        for (const employee of employees) {
            console.log(`-- ${employee}`);
        }
    }
}

Solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);