// Your code here
function mapToNegativize(arg){
    let array = []
    arg.forEach(e=>{array.push(e * -1)})
    return array
}

function mapToNoChange(arg){

    return arg
}

function mapToDouble(arg){
    let array = []
    arg.forEach(e=>{array.push(e * 2)})
    return array
}

function mapToSquare(arg){
    let array = []
    arg.forEach(e=>{array.push(e ** 2)})
    return array
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    sourceArray.forEach(e=> {total += e})
    return total
}   
function reduceToAllTrue(sourceArray){
   let  result = sourceArray.includes(false) ?  false : true
   return result
}
function reduceToAnyTrue(sourceArray){
   let result = sourceArray.includes(true) ? true : false
   return result
}