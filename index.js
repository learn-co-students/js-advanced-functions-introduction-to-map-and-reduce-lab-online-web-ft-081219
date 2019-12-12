const mapToNegativize = arr => {
    return arr.map(x => 0 - x)
}

const mapToNoChange = arr =>  {
    return arr
}

const mapToDouble = arr => {
    return arr.map(x => x*2)
}

const mapToSquare = arr => {
    return arr.map(x => x**2)
}

const reduceToTotal = (arr, num = 0) => {
    let total = num
    for (const x of arr) { total += parseInt(x) }
    return total
}

const reduceToAllTrue = arr => {
    for (const item of arr) { if (!item) {return false}}
    return true
}

const reduceToAnyTrue = arr => {
    for (const item of arr) { if (!!item) {return true}}
    return false
}
