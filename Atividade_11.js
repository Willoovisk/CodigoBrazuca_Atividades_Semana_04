function nalista(lista, num)
{
    if (lista.includes(num))
        {
            console.log("O número está na lista");
        }
    else
    {
        console.log("O número não esta na lista");
    }
}

nalista(([10,20,30,40,50]),10);