// Your code here
const mapToNegativize = function(sourceArray) {
  return sourceArray.map(e => e * -1);
};

const mapToNoChange = function(sourceArray) {
  return sourceArray.map(e => e);
};

const mapToDouble = function(sourceArray) {
  return sourceArray.map(e => e * 2);
};

const mapToSquare = function(sourceArray) {
  return sourceArray.map(e => e * e);
};

function reduceToTotal(sourceArray, startingPoint = 0) {
  return sourceArray.reduce(function(sum, element) {
    return sum + element;
  }, startingPoint);
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false;
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) return true;
  }
  return false;
}

