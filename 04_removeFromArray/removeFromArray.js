const removeFromArray = function(array, ...args) {
    let myArray = array;
    return myArray.filter(value => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
