// Exercises
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
 


    // ex1
    function deleteRollno(obj){
        console.log(obj)
        delete obj.rollno
        console.log(obj)
    }
    // ex2

    function lenthStudent(obj){
        var x=0
       for (i in obj){
        x++
    }
    return x
    }
    




    // // ex0
    //  console.log(student)
    //  // ex1
    // deleteRollno(student)
    //  // ex2
    // lenthStudent(student)
    

 // ex3
 
 library=[]
function DisReadStat (title,author,readingStatus) {
   
    objj={
        title:title,
        author:author,
        readingStatus:readingStatus
    }
    return library.push(objj)
    
}
DisReadStat('Bill Gates','The Road Ahead',true)
DisReadStat('Steve Jobs','Walter Isaacson',true)
DisReadStat('Suzanne Collins','Mockingjay: The Final Book of The Hunger Games',false)

  library
//   ex4


function CylinderVolum(r,h){
    v={}
    v.h=h,
    v.r=r,
    v.t=t
    
return v
}
var t=function(){
    x=Math.PI
    y=Math.floor(x*this.r*2*this.h)
    return y
    }
    test=CylinderVolum(5,7)
    test1=CylinderVolum(6,7)
    test2=CylinderVolum(5,8)
    // test.t()
// ex5

function Calcularpe(r){
    method={}
    method.r=r
    method.area=calcarea,
    method.perimeter=calcper
    return method
}
var calcarea=function(){

x=Math.floor(Math.PI*(this.r**2))
return x
}
var calcper=function(){
    
    x=Math.floor(2*Math.PI*this.r)
    return(x)
}

test=Calcularpe(8)
// test.area()
// test.perimeter()


// Advanced exercises
// The Cat 
function Cat(t,h,l,hap){
    var cat={}
    cat.tiredness=t,
    cat.hunger=h,
    cat.lonliness=l,
    cat.happiness=hap,
    cat.feed=feed,
    cat.sleep=sleep,
    cat.pet=pet,
    cat.status=stat
    return cat
}
var feed=function(){
    if(this.hunger<5){
            this.hunger++
    }
}
var sleep=function(){
    if(this.tiredness<5){
            this.tiredness++
    }
}
var pet=function(){
    if(this.happiness<5){
            this.happiness++
    }
}

var stat=function(){
    if(this.tiredness<5){
        console.log("tired")
    }
    if(this.hunger<5){
        console.log("hunger")
    }
    if(this.lonliness<5){
        console.log("lonly")
    }
    if(this.happiness<5){
        console.log("not happy")
    }
}
ta=Cat(1,4,5,8)

























