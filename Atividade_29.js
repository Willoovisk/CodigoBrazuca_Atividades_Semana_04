function ecrescente(lista)
{    
    for (let n = 0; n < lista.length; n++)
        {
           if (lista[n] > lista[n + 1])
            {
                return false;
            }            
        }
        return true;
    }

console.log(ecrescente([2,3,5,8,19,14,37,6]))
console.log(ecrescente([2,3,5,6,8,14,19,37]))