function contar(texto, letra)
{
    let cont = 0
    for (let n = 0; n < texto.length; n++)
        {
            if (texto[n] === letra)
                {
                    cont = cont + 1;
                }
        }
    console.log(" A letra: ",letra,"aparece ,",cont, "no texto")
}

contar("Quero saber quantas vezes a letra r aparece nesse texto", "r")