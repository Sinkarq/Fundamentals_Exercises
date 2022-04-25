function Login(Arr) {
    const reverseString = (str) => str.split("").reverse().join("");
    const user = Arr[0];
    const password = reverseString(Arr[0]);
    let attempts = 4;
    for (let i = 1; i < Arr.length; i++)
    {
        attempts--;
        if (password === Arr[i]) {
            console.log(`User ${user} logged in.`)
            return;
        }
        if (attempts === 0) {
            console.log(`User ${user} blocked!`)
            return;
        }
        console.log("Incorrect password. Try again.")
    }
}

Login(['momo','omom'])