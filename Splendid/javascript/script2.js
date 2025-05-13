var car={
    name:"Alto",
    yearofManufacturing:2019,
    airbags:false,
    brandName:"Maruti Suzuki",
    };
    car.noofSeats =4;
    car.cityofManu ="pune";
console.log(car);

delete car.airbags;/*to delete something*/
car.brandName ="Tata";/*To update the values*/
console.log(car.brandName);


var x=15;//global variables
var y =20;
function add(x, y){ // here x,y are two new variables not same as above var x,y variables
    var z=x+y;
    console.log(z);
}

add(x,y);// these two variables are two new variables same as ''function add(x,y)'' scope:these are used inside function only not globallly
//to print the function  we call the function with same values


var x=15;//global variables
var y =20;
function add(first, second){ // here x,y are two new variables not same as above var x,y variables
    var z=first+second;
    console.log(z);
//here first and second values are considered to be globally declared x and y variables
}

add(x,y);