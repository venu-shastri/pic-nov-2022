//function object declaration
// var test=new Function("console.log(this)");
function test(){
console.log(this);
}

test(); //apply function using default binding
test.apply("100");//apply function using explicit binding


// constructor function object
//1. use pasacal case for function object name
//2. Apply using new binding(Always)
//3.Never ever return any value from function object(return this;)
function Test(){

}

new Test(); //Apply Function Using new binding 


