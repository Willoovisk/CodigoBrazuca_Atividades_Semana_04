function ordem(lista)
{
    return lista.sort((a, b) => a - b);    
}

console.log(ordem(([5,2,10,8,6,1,20])))