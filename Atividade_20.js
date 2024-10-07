function somardig(num)
{
    soma = 0
    const digitos = num.toString().split('');
    for (n = 0; n < digitos.length; n++ )
        {
            soma = soma + Number(digitos[n]);
        }
    console.log(soma);
}

somardig(2024)