// Introduction to Higher Order Functions
// Exercises0


var cube=function(x) {
    return x*x*x ;
}


var fullname=function(first,last) {
    return first+' '+last 
}
    //  ba3d narj3oulha
var power=function(base,exp){
    if (exp === 0) { 
        return 1; 
        } 
        return base * power(base, exp - 1); 
}


var sumCubes=function(numbers){
    var total = 0; 
       for (var i = 0; i < numbers.length; i++) { 
             total = total + cube(numbers[i]); 
             console.log("ez",total)
       } 
       return total; 
 }
 var numbers=[1,2,3,4]
// Exercises2:

// function each(array, func) { 
//     for (var i = 0; i < array.length; i++) { 
//           func(array[i]); 
//     }}
//     var total = 0; 
//     each(numbers,function(numbers){
//       total+=numbers**2})
// ex4
// function each(numbers,func) { 
//     for (var i = 0; i < numbers.length; i++) {   
//         func(array[i]); 
//     } }
//     var total = 0; 
//     sumCubes(numbers,function(numbers){
//         total = total + cube(numbers[i])
//     })
   //5
 function each(numbers,func){
    for(var i=0;i<numbers.Length;i++){
        func(array[i])}
 }
 var res=1
var prod= function (n){
    res=res*n
}
 
// //function product(numbers){
//  //   var result=0
//  //   for(i=0;i<numbers.Length;i++){
//     result=result+numbers[i] 
//     return result }
// More Practice
// ex5



function each(array,func) {
    for (var i=0 ; i<array.length ; i++)
        {
            func(array[i])
                 }
}
var capit=function (string){
    ar.push(string.toUpperCase())
    console.log(ar)
}
each(['salah','salmen','hedi'],capit)






