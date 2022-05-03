function HouseParty(array) {
    /*- "{name} is going!"

    -   "{name} is not going!"*/
    let list = [];
    for (const str of array) {
        if (str.includes(`is going!`)) {
            let name = str.split(` `)[0];
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`)
            }
            else {
                list.push(name);
            }
        }
        else if (str.includes(`is not going`)) {
            let name = str.split(` `)[0];
            let index = list.indexOf(name);
            if (index == -1) {
                console.log(`${name} is not in the list!`)
            }
            else {
                list.splice(index,1 );
            }
        }
    }
    list.forEach(x => console.log(x));
}

HouseParty(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!'])