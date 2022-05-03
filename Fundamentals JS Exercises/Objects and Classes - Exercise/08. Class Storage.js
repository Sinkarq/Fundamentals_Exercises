class Storage {
    constructor(capacity) {
        this.capacity = capacity;
    }

    storage = []; // Array of products (name, price, quantity)
    totalCost = 0;

    addProduct = product => {
        this.totalCost += product.quantity * product.price;
        this.capacity -= product.quantity;
        return this.storage.push(product);
    };

    getProducts = () => {
        let output = "";
        for (const product of this.storage) {
            output += `${JSON.stringify(product)}\n`;
        }
        return output.trim();
    };
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
