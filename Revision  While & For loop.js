// ex1 
function iterateAndLogWithFor(n) {
    for (var i=0;i<n;i++){
        if (n%2==0){ 
            console.log(i+" is even") 
        }

        else console.log(i+" is odd")
    } 
}

function iterateAndLogWithWhile(n) {
   var i=0
    while (i<n) {
    if (n%2==0) {
        console.log(i+" is even")
    }
    else {
        console.log(i+" is odd") 
    } i++}
    }
    

    // ex2
    function reverseIterateAndLogWithFor(n) {
for (var i=n-1;i>=0;i--)
if (n%2==0){ 
    console.log(i+" is even") 
}
else console.log(i+" is odd")
    } 
    // -------------------------while
    function reverseIterateAndLogWithWhile(n) {
        var i=n-1
        while (i>=0){
            if (n%2==0) {console.log(i+" is even")}
    else {console.log(i+" is odd")}i--}
    }
// -------------------


function reverseIterateAndLogRecursively(n) {
    var i=n-1
    if(i<0){
        return }
     if(i%2===0){
        console.log(i+" is even")
    }
    else 
         console.log(i+" is odd")
    return reverseIterateAndLogRecursively(n-1)}



// ex3-------------------
function weirdDivisionWithFor(n) {
for (var i=0;i<n;i++)
 if(i%3==0 && i%5==0) {console.log("JuliaJames")}
 else if (i%3==0) {
    console.log("Julia")}
 else if (i%5==0) {
    console.log("James")}

else {console.log(i)}
}
// -----------------
function weirdDivisionWithWhile(n) {
var i=0;
while (i<n) {
    if(i%3==0 && i%5==0) {console.log("JuliaJames")}
    else if (i%3==0) {
       console.log("Julia")}
    else if (i%5==0) {
       console.log("James")}
   
   else {console.log(i)} 

i++
}}
// -----------------
// function inverseWeirdDivisionRecursively(n) {
// if (n===1){
//     console.log(n)}
//    else if (n%3===0)&&(n%5===0) {
//     console.log("juliajames")
//    return inverseWeirdDivisionRecursively(n-1)
// }
// else of (n%3===0){
//     console.log("julia") 
//     return inverseWeirdDivisionRecursively(n-1)
//     else if (n%5===0) {
//         inverseWeirdDivisionRecursively(n-1)
//     }
    
// }
// }











// --------ex4---------
function laughWithFor(n) {
    var x=""
    for (var i=0;i<n;i++)
 {x+="ha"}
 return x

}
// laughWithFor(6)
// 'hahahahahaha'
// -----------------

function laughWithWhile(n) {
    var x=""
var i=0
while (i<n) {  x+="ha";
    i++ 
}
return x
}

// -----------------

function laughRecursively(n) {
if(n===0){
    return ""
}else {
return "ha"+laughRecursively(n-1)
}

}
// --------ex5---------



















//##########################################
// ex1

function iterateAndLogWithFor1(n) {
    for (var i=0;i<n;i++){
      if (i%2===0) {
        console.log(i+ " is even")
    } 
      else if(i%2===1){
        console.log(i+" is odd")
    }
    }}


    function iterateAndLogWithWhile1(n) {
var i=0;
while (i<n){
    if (i%2===0) {
    console.log(i+ " is even")
}
else if (i%2===1){
    console.log(i+" is odd")
} i++}

    }

   // ex2
    function reverseIterateAndLogWithFor1(n) {
for (i=n-1;i>=0;i--){
if (i%2===1){
    console.log(i+" is odd")
} 
else  if (i%2===0) {
    console.log(i+ " is even")}
}
    }



    function reverseIterateAndLogWithWhile1(n) {
        var i=n-1;
        while (i>=0){
            if (i%2===1){
                console.log(i+" is odd")
            } 
            else  if (i%2===0) {
                console.log(i+ " is even")}
        i--}
            }

            function reverseIterateAndLogRecursively1(n) {}

// ex3

function weirdDivisionWithFor(n) {
for (var i=0;i<n;i++){
    if (n%3===0&&n%5==0){console.log()}
}




}