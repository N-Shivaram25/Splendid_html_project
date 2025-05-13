var btn = document.getElementById("btn");
btn.addEventListener("focus",function(){
    heading.style.color ="red";
});// this is a anonymous function

/*Now call backfunction:when we pass a function as a parameter to another function then the function we have passed is called call back function*/

function color(){
    heading.style.color ="red";

}


var x = function add(){
    return function ret(){
        console.log("returned");

    }
}
x();