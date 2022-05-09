function Solve(worker) {
    /*Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters.
    If you receive a worker whose dizziness property is set to true it means he needs to intake some water in order to be able to work correctly.
    The required amount is 0.1ml per kilogram per year of experience. The required amount must be added to the existing amount (to the levelOfHydrated).
    Once the water is administered, change the dizziness property to false.
        Workers who do not have dizziness should not be modified in any way. Return them as they were.
        Input
    Your function will receive a valid object as a parameter.
        Output
    Return the same object that was passed in, modified as necessary.*/

    if (worker.dizziness == false) {

        return worker;
    }

    console.log(worker.levelOfHydrated)

    const targetHydration = 0.1 * worker.weight * worker.experience;

    worker.levelOfHydrated += targetHydration;
    worker.dizziness = false;

    return worker;
}

console.log(Solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }

));