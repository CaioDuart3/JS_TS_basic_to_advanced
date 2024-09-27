//* função classica
function delta(a=0, b=0, c=0){
    return b**2 - 4*a*c
}

//* função anõnima
const bhaskara = function(a=0,b=0,c=0){
    x1 = (-1*b + (delta(a,b,c))**0.5)/(2*a)
    x2 = (-1*b - (delta(a,b,c))**0.5)/(2*a)
    console.log(x1 , x2)
};

//* arrow function
//declaração  = parametros => {lógica}
const acharRaiz = (a,b,c) => {bhaskara(a,b,c)};

acharRaiz(1,8,7)








