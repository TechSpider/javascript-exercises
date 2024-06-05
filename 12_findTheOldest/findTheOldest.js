const findTheOldest = function(array) {
    let newArray = array;

    newArray.forEach(element => {
        if ('yearOfDeath' in element) {
            element.age = (element.yearOfDeath - element.yearOfBirth);
        } else {
            const date =  new Date();
            element.age = (date.getFullYear() - element.yearOfBirth);
        }
    });
    newArray.sort((a, b) => a.age - b.age);
    return newArray[newArray.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
