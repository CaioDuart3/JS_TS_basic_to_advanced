let v1 = 1;
let v2 = 2;
r = v1 + v2;
console.log(`resultado: ${r} - tipo: ${typeof(r)}`)
// resultado: 3 - tipo: number


v1 = '1';
v2 = 2;
r = v1 + v2;
console.log(`resultado: ${r} - tipo: ${typeof(r)}`)
// resultado: 12 - tipo: string

v1 = 1;
v2 = '2';
r = v1 + v2;
console.log(`resultado: ${r} - tipo: ${typeof(r)}`)
// resultado: 12 - tipo: string

v1 = '1';
v2 = '2';
r = v1 + v2;
console.log(`resultado: ${r} - tipo: ${typeof(r)}`)
// resultado: 12 - tipo: string



//em suma:
/*
    1 + 2 = 3    number
    '1' + 2 = 12 string
    1 + '2' = 12 string
    '1' + '2' = 12 string
*/
