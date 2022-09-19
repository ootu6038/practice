"use strict";
//let x: number = 10;
//let y:number = 5;
//
//x = 20;
//
//let answer = x * y;
//console.log(answer);
//消費税
//function addTax(price: number) {
//    const tax: number = 10;
//    return Math.round(price * (1 + tax / 100));
//}
//var addTax = function(price:number) {
//    const tax:number = 10;
//    return Math.round(price*(1+tax/100));
//}
//let addTax = (price:number,tax?:number):number =>{
//    if(tax ===undefined){tax = 10;}
//    return Math.round(price*(1+tax/100));
//};
var addTax = function (price, tax) {
    if (tax === void 0) { tax = 10; }
    return Math.round(price * (1 + tax / 100));
};
console.log(addTax(520, 10));
console.log(addTax(520));
console.log(addTax(520, 8));
