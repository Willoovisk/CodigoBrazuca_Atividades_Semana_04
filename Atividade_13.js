function fibo()
{
    let lista = [];
    let atual = 0;
    let seguinte = 1;
    let novo = 0;

    for (let n = 0; n < 10; n++ )
        
        {
            lista.push(atual);
            novo = atual + seguinte;
            atual = seguinte;
            seguinte = novo;
        }
    console.log(" A sequ~encia é: ", lista)    
}

fibo()