//sobre o objeto Number

console.log(Number.isInteger(10.1)) //imprime: False
let num1=0.7;
let num2 = 0.1;
num1+=num2; //0.7999...
num1+=num2; //0.8999...
num1+=num2; //0.9999...
console.log(Number(num1.toFixed(1))) //acerta as casas

