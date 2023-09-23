// ex1
function MakeAccount(initial) {
    
    return {
        balance:initial,
        withdraw:withdraw,
        deposit:deposit
    }
}


var withdraw= function(amount) {
   
      if (this.balance - amount >= 0) {
        this.balance = this.balance - amount;
           return 'Here is your money: $' + amount;
      }
 return 'Insufficient funds.';
 }

 var deposit= function(amount) {
  
    this.balance = this.balance + amount;
         return 'Your balance is: $' +this.balance;
    
};
var myaccount1 = MakeAccount(100)

// ec2


function MakeStopwatch() {
var x={}
x.start1
var time=0
x.start=start
x.stop=stop
x.reset=reset
return x
}
var start = function() {
    var that=this;
    this.stop1= setInterval(function() {
    that.time = that.time + 1;
    console.log('Elapsed time: ' + that.time + 's.');
}, 1000);};

var stop = function() {
    clearInterval(this.stop1);
}
var  reset= function() {
                  clearInterval(this.stop1);
                  this.time = 0;
}
};
var makeStopwatch1 = MakeStopwatch()
makeStopwatch1.start()


// function makeStopwatch() {

//     var makestopwatch={}
//     makestopwatch.stop1;
//     makestopwatch.time = 0;
//          makestopwatch.start=start; 
//     makestopwatch.stop=stop;
//     makestopwatch.reset=reset;
//     return makestopwatch;
// }
// var start= function() {
// var that=this;
//               this.stop1 = setInterval(function() {
//               that.time = that.time + 1;
//               console.log('Elapsed time: ' + that.time + 's.');
//          }, 1000);};
// var stop= function() {

//               clearInterval(this.stop1);
//          };
//        
//          }