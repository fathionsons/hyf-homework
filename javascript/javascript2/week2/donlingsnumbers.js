let numbers = [1, 2, 3, 4];
const doublingNumbers = numbers
    .filter(number => number % 2 !== 0)
    .map(number => number * 2)

    
console.log(doublingNumbers);
