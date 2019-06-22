

// opgave 1
console.log('Exercise 1');
let firstName = "";
let surName = "";
let useFormalName = false;

function getFullname(firstName, surName, useFormalName) {
    if (firstName.length === 0 || surName.length === 0) {
       return ' type your name please!'; 
    } else if (useFormalName) {
        return 'king' + ' ' + firstName + ' ' + surName; 
    }   else {
        return firstName + ' ' + surName;
    }
}

const fullName1 = getFullname('fathi', 'jensen', true);
const fullName2 = getFullname('ali', 'jens', false);
const fullName3 = getFullname('hansen', '', false);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);





// opgave 2
// -----------------------------

console.log('Exercise 2');

const weekDays = [ "søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fridag", "lørdag"];

function getEventWeekday(daysToEvent) {
    const todayDate = new Date();
    let eventIndexDay = (daysToEvent + todayDate.getDay()) % 7;
    return  'din begivenhed ville være ' +  weekDays[eventIndexDay];
}

console.log(getEventWeekday(35));



// opgave 3 

console.log('opgave3');
function youCreateThisFunctionName(temp) {
    if (temp <= 0) {
        return 'ohh, du ville fryse idag, so tag din jakke på!';
    } else if (temp <= 10) {
        return 'det er ikke dejligt udenfor, glem ikke din !';
    } else if (temp <= 21) {
        return 'nyd din dag!';
    } else {
        return 'det vil være so varmt, glem ikke at tage noget sommeragtigt!';
    }
}


const clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear);





// opgave 4 

console.log('opgave 4 ');

let class07Students = ['fathi', 'ali', 'hansen ', 'jensen', 'Adam', 'Julia'];

function addStudentToClass(studentName) {
    if (studentName === '') {
        return 'Please type a name!'
    } else if (class07Students.includes(studentName)) {
        return 'Student ' +  studentName  +  '  is already in the class';
    } else if (studentName === 'Queen') {
        return class07Students = class07Students.push(studentName);
    } else if (class07Students.length >= 6) {
        return 'Cannot add more students to class 07!';
    } else {
        return class07Students = class07Students.push(studentName);
    }
}


console.log(class07Students);
console.log(addStudentToClass('Julian'));
// console.log(addStudentToClass('Ben'));
// console.log(addStudentToClass('Queen'));






// opgave 5 

console.log('opgave 5');
let boughtCandyPrices = [];
let candyType = '';
let weight = 0;
const sweet = 0.5;
const chocolate = 0.7;
const toffe = 1.1;
const chewingGum = 0.03;

function addCandy(candyType, weight) {
    if (candyType === 'sweet') {
        return boughtCandyPrices.push(weight * sweet);
    }
    else if (candyType === 'chocolate') {
        return boughtCandyPrices.push(weight * chocolate);
    }
    else if (candyType === 'toffe') {
        return boughtCandyPrices.push(weight * toffe);
    }
    else if (candyType === 'chewing-gum') {
        return boughtCandyPrices.push(weight * chewingGum);
    } else {
        return;
    }
}
addCandy('sweet', 20);
addCandy('chocolate', 10);

let amountToSpend = (Math.random() * 100).toFixed(0);


let sumOfSpends = 0;
    for(var i = 0; i < boughtCandyPrices.length; i++) {
        sumOfSpends += boughtCandyPrices[i];
    }


function canBuyMoreCandy() {
    if (amountToSpend >= sumOfSpends) {
        return "You can buy more, so please do!";
    } else {
        return "Enough candy for you!";
    }
}
console.log(boughtCandyPrices );
console.log('Cash in the wallet: ', amountToSpend);
console.log('Total of spends: ', sumOfSpends);
console.log(canBuyMoreCandy());