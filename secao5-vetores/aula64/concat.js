const v1 = [1,2,];
const v2 = [3,4,5];
let v3 = [];

// ! jeito errado:
//v3 = v1+v2;
//console.log(v3, typeof v3); // 1,2,3,45,6,7 //string

// * jeito certo - usando método concat: 
v3 = v3.concat(v1,v2, 6,7, [8,9], [[10,11]], 'acabei'); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11 ], 'acabei' ]
console.log(v3);

// * jeito certo - utilizando spread:

v3 = [...v1,...v2,6,7, [8,9], [[10,11]], 'acabei']; //[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ], [ [ 10, 11 ] ], 'acabei' ]
console.log(v3);