// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber.length === 14 && cardNumber[0] === '3' && (cardNumber[1] === '8' || cardNumber[1] === '9')) {
  	return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && cardNumber[0] === '3' && (cardNumber[1] === '4' || cardNumber[1] === '7')) {
  	return 'American Express';
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && cardNumber[0] === '4' && !(isASwitchPrefix(cardNumber))) {
  	return 'Visa';
  } else if (cardNumber.length === 16 && cardNumber[0] === '5' && (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5'))  {
  	return 'MasterCard';
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.slice(0,4) === '6011' || (parseInt(cardNumber.slice(0,3)) >= 644 && parseInt(cardNumber.slice(0,3)) <= 649) || cardNumber.slice(0,2) === '65')) {
  	return 'Discover';
  } else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber.slice(0,4) === '5018' || cardNumber.slice(0,4) === '5020' || cardNumber.slice(0,4) === '5038' || cardNumber.slice(0,4) === '6304')) {
  	return 'Maestro';
  } else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (parseInt(cardNumber.slice(0,6)) >= 622126 && parseInt(cardNumber.slice(0,6)) <= 622925) || (parseInt(cardNumber.slice(0,4)) >= 6282 && parseInt(cardNumber.slice(0,4)) <= 6288) || (parseInt(cardNumber.slice(0,3)) >= 624 && parseInt(cardNumber.slice(0,3)) <= 626)) {
  	return 'China UnionPay';
  } else if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (cardNumber.slice(0,4) === '4903' || cardNumber.slice(0,4) === '4905' || cardNumber.slice(0,4) === '4911' || cardNumber.slice(0,4) === '4936' || cardNumber.slice(0,4) === '6333' || cardNumber.slice(0,4) === '6759' || cardNumber.slice(0,6) === '564182' || cardNumber.slice(0,6) === '633110')) {
  	return 'Switch';
  }
};

var isASwitchPrefix = function(number) {
	return (number.slice(0,4) === '4903' || number.slice(0,4) === '4905' || number.slice(0,4) === '4911' || number.slice(0,4) === '4936');
}
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
