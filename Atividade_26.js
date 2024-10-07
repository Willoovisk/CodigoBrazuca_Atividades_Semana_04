function substring(texto, substring)
{
    return texto.includes(substring);
}

console.log(substring("O rato roeu a roupa do rei de Roma", "Roma"))
console.log(substring("O rato roeu a roupa do rei de Roma", "coroa"))