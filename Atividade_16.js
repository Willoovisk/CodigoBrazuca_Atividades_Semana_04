function palindromo(texto)
{
    let pali = texto.split('').reverse().join('');
    if (texto == pali)
        {
            console.log("O texto é um palíndromo");
        }
    else
    {
        console.log("O texto não é um palíndromo");
    }
}

palindromo("teste")
palindromo("ovo")