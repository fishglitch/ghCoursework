let user = {}

user.age = 16
// user.name = "Ken";


if(user.age == 16){
    do this

console.log("Hello youth driver")
}else{
 console.log("no age, no go")
 }
console.log("cat" !== "horse");


isSunnyToday = 67
if (isSunnyToday == >65) {
    console.log("Let's go to the park!");
}

const hasChocolate = false;

if (hasChocolate) {
    console.log("Get chocolate");
} else {
    console.log("vanilly")
}

const outofBread = true;
const outofEggs = false;
console.log("Go shop!");
if(outofBread) {
    console.log("Bread")
} else {
    console.log("eggs")
}

let num = 9;

function addOneIfLessThan10AndEven(num){
    if(num <10 && !isEven(num)){
        return num + 1;
    }else{
        return num;
    }

}

function subtractOneIfNumIsGreatedThanThreeOrIsOdd(num){
    if (num > 3 || otherNum > 0){
        return num - 1;
    }
    return num;
}

function square(num){
    return num * num
}

num = addOneIfLessThan10AndEven(num);
num = subtractOneIfNumIsGreatedThanThreeOrIsOdd(num);
num = square(num);

console.log("expected=64");
console.log("actual=" + num);


let num = 10;

function addOneIfLessThan10AndEven(num){
   num = num < 10 && !isEven(num) ? num + 1 : num;

   return num; 

    if(num <10 && !isEven(num)){
        return num + 1;
    }else{
        return num;
    }

}

function subtractOneIfNumIsGreatedThanThreeOrIsOdd(num){
    if (num > 3 || otherNum > 0){
        return num - 1;
    }
    return num;
}

function square(num){
    return num * num
}

num = addOneIfLessThan10AndEven(num);
num = subtractOneIfNumIsGreatedThanThreeOrIsOdd(num);
num = square(num);

console.log("expected=64");
console.log("actual=" + num);