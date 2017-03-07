// function that prints I am running
function runningLogger() {
  console.log('I am running!');
}
runningLogger()

// function that multiplies the param by 10
function multiplyByTen(param) {
  console.log(param*10);
  return param*10
}

multiplyByTen(5)

// (2) functions that return hard coded strings

function stringReturnOne() {
  return "This is string 1"
}

function stringReturnTwo () {
  return "This is string 2"
}


// function calls itself if param is a function
function caller (param) {
  if(typeof param === "function"){
    console.log('this is a function');
  }
  else {
    console.log("The param is NOT a function");
  }
}
caller(stringReturnOne)

// function takes in (2) parameters
// validates if params are functions
// if params are functions, console the value of the param functions.
function myDoubleConsoleLog (param1, param2) {
  if(typeof param1 === "function"){
    console.log(param1());
  }
  if(typeof param2 === "function"){
    console.log(param2());
  }
}

myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

function inBetweenStartAndEnd() {
  console.log("This should execute between starting... & ending....")
}

// function takes in (1) param
// logs 'waiting'
// stalls for 2 seconds... see 'setTimeout' for help
// invokes the argument IF the arg is a function.
// log 'ending?'
// return 'interesting'
function caller2 (param2) {
  console.log("starting...but waiting a few seconds...");
  setTimeout(function printEnding() {
    param2();
    console.log('ending')}, 2000);
  return 'interesting'
}
console.log('**********************')
caller2(inBetweenStartAndEnd)
console.log(caller2(inBetweenStartAndEnd));
