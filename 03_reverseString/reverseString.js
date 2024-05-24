const reverseString = function(string) {
	let stringReversed = "";
	
	for (let i = string.length; i > 0; i--) {
		stringReversed = stringReversed.concat(string.at(i - 1));
	}
	return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
