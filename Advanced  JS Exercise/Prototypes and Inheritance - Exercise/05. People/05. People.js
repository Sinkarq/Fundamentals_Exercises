function solution() {
    class Employee {
        salary = 0;
        #remainingTasks;

        constructor(name, age, tasks) {
            this.name = name;
            this.age = age;
            this.tasks = tasks;
            this.#remainingTasks = this.tasks.slice();
        }

        work() {
            if (this.#remainingTasks.length == 0) {
                this.#remainingTasks = this.tasks.slice();
            }
            const task = this.#remainingTasks.shift();

            console.log(task);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        }
    };

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age, [`${name} is working on a simple task.`]);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age,
                [`${name} is working on a complicated task.`,
                        `${name} is taking time off work.`,
                        `${name} is supervising junior workers.`,]);
        }
    }

    class Manager extends Employee {
        dividend = 0;

        constructor(name, age) {
            super(name, age,
                [`${name} scheduled a meeting.`,
                        `${name} is preparing a quarterly report.`]);
        }


        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    }

    return {Employee, Junior, Senior, Manager};
}

const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
