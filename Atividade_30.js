function eimpar(lista)
{
    let cont = 0
    for (let n = 0; n < lista.length; n++)
        {
           if (lista[n] % 2 != 0)
            {
                cont = cont + 1;
            }
        }
    console.log("A quantidade de números ímpares é: ", cont)
}

eimpar([2,3,5,8,19,14,37,6])