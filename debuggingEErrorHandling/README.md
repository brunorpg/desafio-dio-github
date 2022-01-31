# Tratamento de Erros #

## Atividade: validação de erros por tipo ##

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.
<ol>
<li>Crie uma função que recebe um array e um número</li>
<li> Realize as seguintes validações</li>
    <ul>
    <li>Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError</li>
    <li>Se o array não for do tipo 'object', lance um erro do tipo TypeError</li>
    <li> Se o número não for do tipo 'number', lance um erro do tipo TypeError</li>
    <li>Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError </li>
    </ul>
<li> Utilize a declaração try...catch</li>
<li> Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof</li>
</ol>