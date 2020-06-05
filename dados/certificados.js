var certificados = [{
    nome: 'Fundamentos de Desenvolvimento Móvel utilizando Android API e Java',
    src: 'img/certificados/Android.png',
    texto: 'teste teste <p> test </p>',
    ano: 2020
}];


function compararAno(a, b) {
    if (a.ano < b.ano) {
        return -1;
    } else if (b.ano < a.ano) {
        return 1;
    }
    // a deve ser igual a b
    return 0;
}
certificados = certificados.sort(compararAno);