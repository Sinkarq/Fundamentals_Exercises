function createSortedList() {
    let obj = {};
    obj.arr = [];
    obj.add = (num) => {
        obj.arr.push(num);
    }
    obj.remove = (num) => {
        obj.arr.splice(num, 1);
    }
    obj.get = (index) => {
        return obj.arr[index];
    }
    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.arr)
console.log(list.get(1));

// 6, 7