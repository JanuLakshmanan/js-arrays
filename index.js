//Array methods


// loops through the array
// output: janu shwetha devi aswa
const arr=['janu','shwetha','devi','aswa'];
arr.forEach(myFunction);
function myFunction(item, index) {
  console.log(item);
}
// method creates a new array with the results of calling a function for every array element.
// output : [2,3,5]
const num=[4,9,25];
console.log(num.map(Math.sqrt));
// method creates an array filled with all array elements that pass a test
// output :[25]
function checkvalue(number){ return number>9;}
console.log(num.filter(checkvalue));
//console.log(num.filter(num=>num>9));

//checks whether the specified value  is true or not
//output: true
const arr=['janu','shwetha','devi','aswa'];
console.log(arr.includes('janu'));

//method searches the array for the specified item, and returns its position
// output:2
console.log(arr.indexOf("devi"));

// method returns the index of the first element in an array that pass a test
//output :2
function checkvalue(number){ return number>9;}
 console.log(num.findIndex(checkvalue));

 //reverses the order of the elements in an array.
 //output :["aswa", "devi", "shwetha", "janu"]
 console.log(arr.reverse());

 //reduces the array to a single value.
 //output : 38
 function func(total,number){return total+number;}
 console.log(num.reduce(func));

//removes the first item of an array.
//output: aswa
arr=["aswa", "devi", "shwetha", "janu"]
console.log(arr.shift());

//returns the value of the first element in an array that pass a test 
//output: 25
function checkvalue(number){ return number>9;}
 console.log(num.find(checkvalue));

//adds/removes items to/from an array, and returns the removed item(s)
//output:devi
arr=["aswa", "devi", "shwetha", "janu"];
console.log(arr.splice(1,1,"dhak"));
console.log(arr);

//returns the selected elements in an array, as a new array object
//output:["dhak","shwetha"]
console.log(arr.slice(1,3));

//sorts the elements in the array
//output:["aswa", "dhak", "janu", "shwetha"]

console.log(arr.sort());

//join two arrays
//output:
console.log(arr.concat(num));

//removes the last element
//output:shwetha
console.log(arr.pop());

//adds new items to the end of an array, and returns the new length
//output:4
console.log(arr.push("shwetha"));
 
 //removes the first item of an array.
 //output:aswa
 console.log(arr.shift());
 
 //adds new items to the beginning of an array, and returns the new length.
 //output:5
 console.log(arr.unshift("gokul","arrya"));
