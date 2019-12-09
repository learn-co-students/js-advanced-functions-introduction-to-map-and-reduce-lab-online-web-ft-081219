// Your code here
function mapToNegativize(sourceArray) {
    let array = [];
    sourceArray.forEach(element => array.push(element * -1));
    return array
}
function mapToNoChange(sourceArray) {
    return sourceArray;
}
function mapToDouble(sourceArray) {
    let array = [];
    sourceArray.forEach(element => array.push(element * 2));
    return array;
}
function mapToSquare(sourceArray) {
    let array = [];
    sourceArray.forEach(element => array.push(element ** 2));
    return array;
}
function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(element => startingPoint += element);
    return startingPoint
}
function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false;
        }
    }
    return true;
}
function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true;
        }
    }
    return false;
}