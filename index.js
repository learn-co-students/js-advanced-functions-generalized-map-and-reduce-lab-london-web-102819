// Add your functions here
const map = function (ary, fnc) {
    let result = [ ];
    ary.forEach(item => result.push(fnc(item))); 
    return result;
};

const reduce = function(ary,fnc,startingPoint){
    let memo;
    if (startingPoint === undefined){
        memo = ary[0];
        ary = ary.slice(1);
    } else {
        memo = startingPoint;
    };
    ary.forEach(item => memo = fnc(item, memo));
    return memo; 
};