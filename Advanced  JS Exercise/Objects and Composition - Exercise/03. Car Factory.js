function Solve(input) {
    let car = {};

    car.model = input.model;

    if (input.power <= 90) {
        car.engine = { power: 90, volume: 1800};
    }
    else if(input.power >= 91 && input.power <= 120) {
        car.engine = { power: 120, volume: 2400};
    }
    else {
        car.engine = { power: 200, volume: 3500};
    }


    car.carriage = { type: input.carriage, color: input.color};

    const wheelSize = RoundToFloorOddNum(Number(input.wheelsize));
    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return car;


    function RoundToFloorOddNum(num) {
        while (num % 2 != 1) {
            num--;
        }
        return num;
    }
}

console.log(Solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));
