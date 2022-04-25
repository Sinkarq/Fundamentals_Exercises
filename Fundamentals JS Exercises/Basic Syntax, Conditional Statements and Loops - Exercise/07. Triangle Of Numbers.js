function Triangle(num) {
    for (let i = 1; i <= num; i++)
    {
        let line = "";
        for (let j = 0; j < i; j++)
        {
            line = line + ` ${i}`
        }
        console.log(line.trimStart())
    }
}

Triangle(10)