//this is nice programs that helps to pass as much as many args and sum their value 

// here reduce is a new function;

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
  
}

// cloning array ES6

const arr1 = [1,2,3,4,5];
let arr2;

arr2 = [...arr1];

//swapping value is more easy by destructuring assignment
let a =10, b=5;
[a,b] = [b,a];

_____________________________________________________________

//Class & constructor

class Vegetable{
  constructor(name) {
    this.name = name;
  }

}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'



