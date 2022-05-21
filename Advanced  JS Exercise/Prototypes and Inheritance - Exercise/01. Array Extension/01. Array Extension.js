(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (i) {
        this.splice(i, 0);
        return this;
    }
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }
    Array.prototype.sum = function () {
        return this.reduce((accumulator, value) => accumulator + value, 0);
    }
    Array.prototype.average = function () {
        const sum = this.reduce((accumulator, value) => accumulator + value, 0);

        return sum / this.length;
    }
})();

let testArray = [1, 2, 3];
console.log(testArray.skip(1));
console.log(testArray.skip(1)[0])
