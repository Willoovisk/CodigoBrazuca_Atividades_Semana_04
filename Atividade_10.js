function nvogal(texto)
{
    let contador = 0;
    const vogais = ["a", "e", "i","o","u","A", "E", "I","O","U"]

    for (let n = 0; n < texto.length; n++)
        {
            if (vogais.includes(texto[n]))
                {
                    contador = contador + 1;
                }            
        }
    console.log("O número de vogais é:", contador)
}

nvogal("Polkadot")