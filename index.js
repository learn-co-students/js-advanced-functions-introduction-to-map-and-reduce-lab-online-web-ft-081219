// Your code here
function mapToNegativize(sourceArray) {
  let arr = []

  for (var i = 0; i < sourceArray.length; i++) {
    let num = sourceArray[i]
    arr.push(num * -1)
  }
  return arr
}
function mapToNoChange(sourceArray) {
  let arr = []

  for (var i = 0; i < sourceArray.length; i++) {
    let el = sourceArray[i]
    arr.push(el)
  }
  return arr
}
function mapToDouble(sourceArray) {
  let arr = []

  for (var i = 0; i < sourceArray.length; i++) {
    let num = sourceArray[i]
    arr.push(num * 2)
  }
  return arr
}
function mapToSquare(sourceArray) {
  let arr = []

  for (var i = 0; i < sourceArray.length; i++) {
    let num = sourceArray[i]
    arr.push(num * num)
  }
  return arr
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  for (var i = 0; i < sourceArray.length; i++) {
    let el = sourceArray[i]
    startingPoint += el
  }

  return startingPoint
}

function reduceToAllTrue(sourceArray) {
  for (var i = 0; i < sourceArray.length; i++) {
    let el = sourceArray[i]
    if (!el) {
      return false
    }
  }
  return true
}
function reduceToAnyTrue(sourceArray) {
  for (var i = 0; i < sourceArray.length; i++) {
    let el = sourceArray[i]
    if (el) {
      return true
    }
  }
  return false
}
