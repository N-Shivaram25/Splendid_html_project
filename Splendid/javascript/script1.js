/*var x =prompt("Enter a number from 1-3");
var y =parseInt(x);
parseInt(x);
console.log(typeof y);
console.log(typeof x);

switch(y){
case 1 :
    console.log("1st case is executed ");
    break;
case 2 :
    console.log("1st case is executed ");
    break;
case 3 :
    console.log("1st case is executed ");
        break;
default :
    console.log("1st case is executed ");
    break;
}*/

var name ="Shivaram";/*string is a collection of alphabets*/
console.log(name.length);/*length=10*/
console.log(name[0]);
/*you cannot change individual alphabets of string */


var arr=[100,200,540,846,5487,1472];
arr[0]=150;
console.log(arr);/*you can change individual alphabets/num of array */
/*for(var i=0;i<arr.length;i++){
    console.log(arr[i]);*/
var arr=[100,200,540,846,5487,1472];
arr[6]=150;/*adding one more element to array*/
console.log(arr);

var arr=[100,200,540,846,5487,1472];
arr.pop();/*To delete an last element in an array*/
console.log(arr);

var arr=[100,200,540,846,5487,1472];
arr.shift();/*To remove the first element in an array*/
console.log(arr);

var arr=[100,200,540,846,5487,1472];
arr.push(46);/* to add one more element in an array*/
console.log(arr);

var arr=[100,200,540,846,5487,1472];
arr.unshift(46);/* to add one element in first place in an array*/
arr[3]=25;/* to add in middle or particular index*/
console.log(arr);
    






