"use strict";

// let a = 5, 
// 	b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj){
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj){
// 		objCopy[key] = mainObj [key];
// 	}
// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c:{
// 		x: 7,
// 		y: 4
// 	}
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
// 	d: 17,
// 	e: 20
// };

// const clone = Object.assign({},add);

// clone.d = 20;

// console.log(add);
// console.log(clone);


// const oldArray = ['a', 'b', 'c', 'd'];
// const newArray = oldArray.slice();

// newArray[1] = 'sadsad'
// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
// 	blogs = ['wordpress', 'livejournal', 'blogger'],
// 	intenet = [...video,...blogs,'vk','facebook'];
// console.log(intenet);

// function log(a , b, c){
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);

// }

// const num = [2, 5, 7];
// log(...num);

// const array = ["a", "b"];
// const newAarray = [...array];
// console.log(newAarray);

// const q = {
// 	one: 1,
// 	two: 2
// };
// const newObj ={...q};
// console.log(newObj);


let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function(){
		console.log("Hello")
	}
};


const john = Object.create(soldier);

// const john = {
// 	health: 100
// };

Object.setPrototypeOf(john, soldier);
// john.__proto__ = soldier;
// console.log(john.armor);
john.sayHello();