function somapar(lista)
{
    let soma = 0
    for (let n = 0; n < lista.length; n++)
        {
            if (lista[n] % 2 == 0)
                {
                    soma = soma + lista[n];
                }
        }
    console.log("A soma dos números pares é: ", soma)
}

somapar([2,3,5,8,19,14,37,6])