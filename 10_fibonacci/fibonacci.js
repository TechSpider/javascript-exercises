const fibonacci = function(num) {
    if (Number(num) < 0) {
        return "OOPS";
    }

    let fib = [0, 1];

    for (i = 1; i < Number(num); i++) {
        fib.push(fib[i] + fib[i - 1]);
    }

    return fib[Number(num)];
}

// Do not edit below this line
module.exports = fibonacci;
