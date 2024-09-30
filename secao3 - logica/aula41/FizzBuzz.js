const fizzBuzz = (num)=> {
    if (typeof num !== 'number') return num;
    if(num % 3 === 0 && num % 5 === 0) return `${num} - FizzBuzz`;
    if (num % 3 === 0) return `${num} - Fizz`;
    if (num % 5 === 0) return `${num} - Buzz`;
    return num;
};
for(let i =1; i<=100;i++){
    console.log(fizzBuzz(i));
}