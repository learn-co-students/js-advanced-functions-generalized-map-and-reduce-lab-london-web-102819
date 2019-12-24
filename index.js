const map = (srcArr, fn) => {
  let result = [];
  srcArr.forEach(arr => result.push(fn(arr)));
  return result;
};

const reduce = (srcArr, fn, initialValue) => {
  let result;
  let startAtIndex;

  if (initialValue) {
    result = initialValue;
    startAtIndex = 0;
  } else {
    result = srcArr[0];
    startAtIndex = 1;
  }

  for (let i = startAtIndex; i < srcArr.length; i++) {
    result = fn(srcArr[i], result);
  }

  return result;
};
