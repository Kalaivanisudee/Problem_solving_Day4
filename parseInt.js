console.log(parseInt(0.3));//0
console.log(parseInt(0.03));//0
console.log(parseInt(0.003));//0
console.log(parseInt(0.0003));//0
console.log(parseInt(0.00003));//0
console.log(parseInt(0.000003));//0
console.log(parseInt(0.0000003));//3
console.log(parseInt(0.000000003));//3

console.log(+(0.3));//0.3
console.log(+(0.03));//0.03
console.log(+(0.003));//0.003
console.log(+(0.0003));//0.0003
console.log(+(0.00003));//0.00003
console.log(+(0.000003));//0.000003
console.log(+(0.0000003));//3e-7
console.log(+(0.000000003));//3e-9

let string = "120O" 
console.log(parseInt(string));//120
console.log(Number(string));//NaN
console.log(+(string));//Nan

let string1 = "12e8" 
console.log(parseInt(string1));//12
console.log(Number(string1));//1200000000
console.log(+(string1));//1200000000
