function multi(lista)
{
    let total = 1
    for (let n = 0; n < lista.length; n++)
        {
           total = total * lista[n];
        }
    console.log("O resultado é: ", total)
}

multi([2,3,5,8,19,14,37,6])