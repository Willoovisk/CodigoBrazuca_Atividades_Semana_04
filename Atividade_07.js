function eprimo(A)
{
    if (A <= 1)
        {
            return false;
        }
    
    
    for (let i = 2; i < A; i ++)
    {
        if (A % i === 0)
            {
                return false;
            }
    }
    return true;
}

console.log(eprimo(58));