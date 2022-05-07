function Solve(_type,_weight, _price) {
    let weight = _weight / 1000;
    let price = _price * weight;
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${_type}.`)
}

Solve('orange', 2500, 1.80);