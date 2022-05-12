function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let array = JSON.parse(document.querySelector("textarea").value);

      const bestRestaurantEl = document.querySelector("#bestRestaurant p");
      const workersEl = document.querySelector("#workers p");

      const data = parseWorkers(array);

      let bestRestaurantName = "";
      let bestRestaurantSalary = 0;
      let bestRestaurantAverage = 0;

      // Average best

      for (const restaurant in data) {
         let counter = 0;
         for (const worker of data[restaurant]) {
            counter += worker.salary;
         }

         const average = counter / data[restaurant].length;
         if (bestRestaurantAverage < average) {
            bestRestaurantAverage = average;
            bestRestaurantSalary = counter;
            bestRestaurantName = restaurant;
         }
      }

      const sortedSalariesOfBestRestaurant = Object.values(data[bestRestaurantName]).sort((a, b) => b.salary - a.salary);
      const bestSalary = (sortedSalariesOfBestRestaurant[0].salary).toFixed(2);
      const averageSalary = (bestRestaurantSalary/(data[bestRestaurantName]).length).toFixed(2);
      const firstOutput = `Name: ${bestRestaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
      let workerOutputs = "";
      Object.values(data[bestRestaurantName]).sort((a, b) => b.salary - a.salary).forEach(x => workerOutputs += `Name: ${x.name} With Salary: ${x.salary} `);

      console.log(workerOutputs);
      bestRestaurantEl.textContent = firstOutput;
      workersEl.textContent = workerOutputs;
      console.log(firstOutput);

      //console.log(bestRestaurantSalary, bestRestaurantName)
      function parseWorkers(array) {
         //const array = ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"];

         let storage = {};

         for (const restaurant of array) {
            let workers = [];
            let restaurantTokens = restaurant.split(" - ");
            let restaurantName = restaurantTokens[0];
            // Peter 500, George 300, Mark 800
            let workerTokens = restaurantTokens[1].split(", ");
            for (const worker of workerTokens) {
               const credentials = worker.split(" ");
               const name = credentials[0];
               const salary = Number(credentials[1]);
               if (storage.hasOwnProperty(restaurantName)) {
                  storage[restaurantName].push({name, salary});
               }
               else {
                  storage[restaurantName] = [];
                  storage[restaurantName].push({name, salary});
               }
            }
         }

         return storage;
      }
   }
}