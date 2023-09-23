// Sprint Material Part 1
// Basic Requirements

function sum(num) {
   
    if (num===0){
        return 0
    } 
    return num+sum(num-1)
}
// ex2

function factorial(number) {
if (number===0)
{
    return 1
}
return number*factorial(number-1)
}
// ex3

function repeatString(string, number) {
    if (number===0){
        return ""
    }
    return string+repeatString(string,number-1)
}
// ex4
function multiplyBy10(firstNumber, secondNumber) {
    if (secondNumber===0){
        return firstNumber
    }
    return 10*multiplyBy10(firstNumber,secondNumber-1)
}
// ex1
function sumBetween(start, end) {
    if (start<end){
        if (end===start){
            return start
        }return end+sumBetween(start,end-1)
    }
   else {if (start===end){
    return end
}
return start+sumBetween(start-1,end)
}} 
// ex2


function add(number1, number2) {
    if (number2===0){
        return number1
    }
    return add(inc(number1),dec(number2)) 
}  function inc(x) {
    return x + 1 
 }  function dec(x) {
    return x - 1 
 } 
//  ex3
function isEven(n) {
if(n===0){
    return true
} else if (n===1){
    return false
}return isEven(n-2) }  
// ex4




//  ex5
function multiply(number1, number2) {
   if (number2==0){
    return 0
}
return number1+multiply(number1,number2-1)
}
