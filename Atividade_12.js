function fatorial(numero)
{
    let fat = 1
    while (numero >= 1)
        {
            fat = fat * numero
            numero = numero -1
        }
    console.log("O resultado é: ", fat)

}

fatorial(5)