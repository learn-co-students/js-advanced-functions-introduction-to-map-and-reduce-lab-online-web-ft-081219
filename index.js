import { start } from "repl";

// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach(e => {
        let result = e * (-1);
        newArray.push(result);
    })
    return newArray;
}

function mapToNoChange(sourceArray) {
    let newArray = [];
    sourceArray.forEach(element => {
        let answer = element;
        newArray.push(answer);
    });
    return newArray;
}

function mapToDouble(sourceArray) {
    let newArray = [];
    sourceArray.forEach(element => {
        let answer = element * 2;
        newArray.push(answer);
    });
    return newArray;
}

function mapToSquare(sourceArray) {
    let newArray = [];
    sourceArray.forEach(element => {
        let answer = element * element;
        newArray.push(answer);
    });
    return newArray;
}

function reduceToTotal(list, startingPoint) {
    // if (list.length === 0) {
    //     return startingPoint;
    // } else if (startingPoint === "") {
    //     list.forEach(element => element + element)
    // }
    // else {
    //     const [first, ...rest] = list;
    //     const reducer = (total, val) => total + val
    //     const updatedAcc = reducer(startingPoint, first);
    //     return reduceToTotal(rest, updatedAcc, reducer);
    // }

    let sum = 0;
    if (startingPoint == undefined) {
        list.forEach(element => {
            sum = sum + element;
        });
    } else {
        list.forEach(element => {
            sum = sum + element;
        });
        sum = sum + startingPoint;
    }
    return sum;
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.every(Boolean) ? true : false;
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.some(Boolean) ? true : false;
}