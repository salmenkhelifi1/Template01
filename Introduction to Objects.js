// Exercises
// Basic Requirements
// ex1

// var obj={firstName 'Yan',
//  lastname: 'Fan' 
// } 
// var x={a: 1,
//      b:2,
//       c: 3,
//        d: 4
//     } 
// var a= { 
//       animal: 'dog' ,
//       noise: 'bark', 
//       age: 3, 
//       type:  'Golden Retriever' 
//       color: 'Yellow'
// }
// // ex2

    var person={
        firstName: 'salmen',
        lastname:'khelifi',
        age:24,
        hometown:'soukra'
    }
    // 3
    person.food='kaftji'

    // 4
 delete person.firstName
 delete person.lastname

 perso.name={ firstName: 'salmen',
 lastname:'khelifi'}

//  
// delete person.firstname
// true
// person
// {lastname: 'omrani', age: 27, hometown: 'el manar ', food: 'pasta', name: {…}}
// delete person.lastname
// true
// person
// {age: 27, hometown: 'el manar ', food: 'pasta', name: {…}}
// person.name={firstname:"inesse",
//              lastname: "omrani", middlename:"" }
// {firstname: 'inesse', lastname: 'omrani', middlename: ''}
// person 

//  5
// function empty() {
//     return (  {} )}
function emptyObject(){  
  //Write your code here 
  console.log( console.log({}))
}  
// ex6
// var myObject={animal:"cat",
// food:"turkey",
// age:"3",
// // key:true}

// function addProperty(object, key) {
//   object[key]=true
// } 

function addproperty(object  , key){
    object[key]=true 
return object
}

addproperty(obj,"kitten")

{animal: 'dog', food: 'kafteji', key: true, kitten: true}
obj
{animal: 'dog', food: 'kafteji', key: true, kitten: true}
// ex7
var myObject={animal:"cat",
food:"turkey",
age:"3"}

function deleteProperty (object, key){
// delete object.key not trus
delete object[key]
  }
  
//  ex8

var person1={
    name:'ahmed',
    role:'worker'
}

var person2={
    name:'fadi',
    role:'manager'
}
    function addObjectProperty(object1,key,object2){
object1[key]=object2
    return object1.manager}

//     addObjectProperty(person1,"manager",person2)
// {name: 'fadi', role: 'manager'}

// ex9
var person ={
    firstName:'Leena',
    lastName:'Atia'
}

    function addFullNameProperty(obj) {
        if (obj.firstName && obj.lastName) {
          obj.fullName = obj.firstName+' '+obj.lastName
        }return obj.fullName
      } 
