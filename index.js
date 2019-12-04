function mapToNegativize(sourceArray) {
  const holderArr = [];
  for (const number of sourceArray) {
    holderArr.push(number * -1);
  }
  return holderArr;
  // return sourceArray.map(function(num) {
  //   return num * -1;
  // })
  // return sourceArray.map(num => num * -1)
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  const holderArr = [];
  for (const number of sourceArray) {
    holderArr.push(number * 2);
  }
  return holderArr;
  // return sourceArray.map(num => num * 2)
}

function mapToSquare(sourceArray) {
  const holderArr = [];
  for (const number of sourceArray) {
    holderArr.push(number ** 2);
  };
  return holderArr;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let result = startingPoint;
  for (const number of sourceArray) {
    result += number;
  };
  return result;
}

function reduceToAllTrue(sourceArray) {
  let result = true;
  for (const value of sourceArray) {
    if (value === false) {
      result = false;
    }
  }
  return result;
  // return sourceArray.reduce((aggregate, value) => {
  //   if (value === false) {aggregate = false};
  //   return aggregate;
  // }, true)
}

function reduceToAnyTrue(sourceArray) {
  let result = false;
  for (const value of sourceArray) {
    if (value === true) {
      result = true;
    }
  }
  return result;
}