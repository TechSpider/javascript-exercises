const removeFromArray = function(array, ...itemToRemove) {
    let newArray = array;

    for (const item of itemToRemove) {
        for (const element of array) {
            if (element === item) {
                newArray = newArray.toSpliced(newArray.indexOf(element), 1);
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1,2,3,4,5,5,6,6], 6, 5));