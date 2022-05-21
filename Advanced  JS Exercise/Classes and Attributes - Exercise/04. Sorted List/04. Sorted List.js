class List {
    array = [];

    add(num) {
        this.array.push(num);

        this.array = this.#sortArray(this.array);
    }

    get(index) {
        const value = this.array[index];

        if (value == undefined) {
            throw new Error();
        }

        return value;
    }

    remove(index) {
        if (this.get(index) == undefined) {
            throw new Error();
        }

        this.array.splice(index, 1);
        this.array = this.#sortArray(this.array);
    }

    #sortArray = (array) => array.sort((a, b) => a - b);

}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
