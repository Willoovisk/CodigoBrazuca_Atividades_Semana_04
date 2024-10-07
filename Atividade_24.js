function divisores(num)
{
    let lista = []
    for (let n = 1; n <= num; n ++)
        {
            if (num % n == 0)
                {
                    lista.push(n);
                }
        }
    console.log("A lista de divisores do número é: ",lista)    
}

divisores(40)
divisores(21)