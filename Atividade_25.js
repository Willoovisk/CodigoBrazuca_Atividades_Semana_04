function semvogal(texto)
{
    const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let novo = "";

    for(let n = 0; n < texto.length; n++)
        {
            if (vogais.includes(texto[n]))
                {
                    novo += "*";
                }
            else
            {
                novo += texto[n];
            } 
        }
    return novo;    
}
console.log(semvogal("Alterando As vOgaIs"))