function solve(array, criteria) {
    const storage = [];

    for (const arrElement of array) {
        const [destination, price, status] = arrElement.split('|');
        storage.push({destination, price: Number(price), status});
    }

    if (criteria == `price`) {
        return storage.sort((a, b) => a.price - b.price);
    }

    return storage.sort((a, b) => a[criteria].localeCompare(b[criteria]));
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));