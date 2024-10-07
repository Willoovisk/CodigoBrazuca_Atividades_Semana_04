function media(lista)
{
    let resultado = 0;
    let soma = 0;
    for (let n = 0; n < lista.length; n++)
        {
            soma = soma + lista[n];
        }  
    return soma / lista.length;    
}

console.log(media([1,2,3,4,5]));