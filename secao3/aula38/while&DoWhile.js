const random = (min,max) => {
    return Math.floor(Math.random() * (max-min)+min);
}
rand = 10;
console.log(`inicio: ${rand}`);
console.log('while:')
while(rand !== 10){  //checa dps faz
    rand = random(1,50)
    console.log(rand);
}
console.log('do while:')
do{                       //faz depois checa
    rand = random(1,50)
    console.log(rand);
}while(rand !==10);