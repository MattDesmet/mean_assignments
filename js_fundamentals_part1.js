var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
  x.push(100);
  x.push(["hello", "world", "JavaScript is Fun"])
for (var i=0; i < x.length; i++){
  console.log(x[i]);
  }
console.log("This is inside the inner array at position 1: ",x[7][1]);

//create empty array
//push numbers from 1-100 into array
// loop thru the array and add sum to var counter
// console log after each iteration

//LONG way
var y = [];
var countUpTo = 5
var addThis = 0
var sum = 0
while (y.length < countUpTo+1){
  y.push(addThis ++)
  // console.log(y);
  }
for (var i = 0; i<y.length; i++){
  sum = sum += y[i]
  console.log("The [i] position is now: ",[i], "and the sum is now: ", sum);
}

This code block builds an array with a range from 0 to N
var N = 10;
rangeArray = Array.apply(null, {length: N+1}).map(Number.call, Number)
console.log("Newly built array : ",rangeArray);

// Return the MIN value of the array
var minArr = [1, 5, 90, 25, -3, 0]
var min = 0
for (var i = 0; i < minArr.length; i++){
  if (minArr[i] < min){
    min = minArr[i];
  }
}
console.log("The minimum # in the array is: ", min);

// Return Average of the Array
var sum = 0
for (var i = 0; i < minArr.length; i++){
  sum = sum += minArr[i];
}
console.log("The avg of the array is: ",Math.floor(sum/minArr.length));

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (i in newNinja){
    console.log(i);
    for (key in newNinja[i]){
        console.log( key + ": " + newNinja[i][key]);
    }
}

for (var key in newNinja){
  console.log("The key is: ", key, "and this is the value: ", newNinja[key]);
}
