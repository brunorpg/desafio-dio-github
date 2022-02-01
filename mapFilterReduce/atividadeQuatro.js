function somaArray(arr){
   return arr.reduce((prev, current) => prev + current);
}

const array = [1,2];

console.log(somaArray(array));

const lista = [
    {
        name: 'sabao em pó',
        preco: 8,
    },
    {
        name: 'cereal',
        preco: 9,
    },
    {
        name: ' toalha',
        preco: 69,
    }
]

const saldo = 100;

function calculaSaldo(saldo, lista){
    return lista.reduce((prev, current) => prev - current.preco, saldo);
}
console.log(calculaSaldo(saldo, lista));