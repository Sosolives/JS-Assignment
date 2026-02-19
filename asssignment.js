
// Question 1
let weight = 70;
let height = 1.80;
let bmi = weight / (height * height);
function calculateBMI(weight, height) {
if (bmi < 18.5) {
    return "You are Underweight"
} else if(bmi < 24.9) {
    return "You are Normal Weight"
} else if (bmi < 29.9) {
    return "You are Overweight"
} else {
    return "You are Obese"
};
}
result = calculateBMI()
console.log(result)

// Question 2
let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function checkSeason (months) {
    
    if ( 
        months === "March" ||
        months === "April" ||
        months === "May"
    ) {
        return "Spring"
    } else if (
        months === "June" ||
        months === "July" ||
        months === "August"
    ){  return "Summer"        
    } else if (
        months === "September" ||
        months === "October" ||
        months === "November"
    ) {
       return "Autumn"
    } else if (
        months === "December" ||
        months === "January" ||
        months === "February"
    ){
        return "Winter"
    }
    else {return "Invalid month"}

}
console.log(checkSeason("April"))

//Question 3
function findMax(a, b, c) {
let max = a;
if (b > max){
    max = b;
} 
if (c > max) {
    max = c;
}
return max;
}
console.log(findMax(10, 19, 2))

//Question 4
let array = [1, 2, 3, 4, 5];
function printArray(arr) {
for (let i = 0; i < arr.length; i++) {
    console.log(array[i])
}
}
printArray([1, 2, 3, 4, 5]);


