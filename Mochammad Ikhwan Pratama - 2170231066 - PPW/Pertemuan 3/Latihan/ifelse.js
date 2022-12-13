function test() {
    const val1 = promp("nilai 1:");
    const val2 = promp("nilai 2:");
    document.write(`${val1 == val2} </br>`)
    document.write(`${val1 !== val2} </br>`)
    document.write(`${val1 >= val2} </br>`)
    document.write(`${val1 <= val2} </br>`)
}