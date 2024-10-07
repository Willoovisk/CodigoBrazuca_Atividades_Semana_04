function inveter(palavra)
{
    let resultado = palavra.split('').reverse().join('');
    console.log(resultado);
}

console.log(inveter("Brazuca"))