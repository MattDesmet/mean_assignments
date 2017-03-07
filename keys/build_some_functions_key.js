/*
  Goal for these first 'easy' difficulty level assignments:
  returns versus void returns
*/

function runningLogger(){
  console.log("I am running");
}

function multiplyBy10(numb){
  if (typeof(numb) == "number"){
    return numb*10;
  }
}

function stringReturnOne(){
  return "cat";
}

function stringReturnTwo(){
  return "dog";
}

function myFunctionRunner(param){
  if (typeof(param)=='function'){
    param();
  }
}
// Somewhat interesting right?
myFunctionRunner(stringReturnOne);

function myDoubleConsoleLog(param1,param2){
  if (typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1(), param2());
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
