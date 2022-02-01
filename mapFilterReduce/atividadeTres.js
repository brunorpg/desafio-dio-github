function filtraPares(arr) {
    return arr.filter((item) => item % 2 === 0);
}
function filtraImpares(arr) {
    return arr.filter((item) => item % 2 !== 0);
}

const meuArray = [1, 23, 55, 67, 30, 2, 4, 40];


console.log(meuArray);
console.log('Os numeros pares sao:', filtraPares(meuArray));
console.log('Os numeros impares sao:', filtraImpares(meuArray));