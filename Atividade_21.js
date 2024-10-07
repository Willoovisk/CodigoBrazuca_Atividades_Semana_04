function multiplos(a, b) 
{
    let check = a % b;
    if (check == 0)
        {
            console.log("Os números são múltiplos");
        }
    else
    {
        console.log("Os números não são múltiplos");
    }
}

multiplos(3,10)
multiplos(4,2)