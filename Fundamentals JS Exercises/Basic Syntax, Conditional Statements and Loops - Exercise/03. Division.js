function Division(num) {
    const output = "The number is divisible by"
    if (num % 10 === 0) {
        console.log(`${output} 10`)
    }
    else if (num % 7 === 0) {
        console.log(`${output} 7`)
    }
    else if (num % 6 === 0) {
        console.log(`${output} 6`)
    }
    else if (num % 3 === 0) {
        console.log(`${output} 3`)
    }
    else if (num % 2 === 0) {
        console.log(`${output} 2`)
    }
    else {
        console.log("Not divisible")
    }
}