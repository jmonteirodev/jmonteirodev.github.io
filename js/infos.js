var atividades = [
    {   
        titulo_curto : 'Atividade 1',
        titulo : 'Atividade 1: Ilusão',
        texto : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora praesentium consequuntur doloremque numquam magnam impedit dolorem expedita, doloribus odio repudiandae, corporis nemo commodi modi provident quasi. Aut cum error molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum unde ipsum delectus beatae dicta eligendi maxime recusandae fugit quod provident debitis asperiores, corporis quasi aliquid. Cum nostrum at sequi libero!',
        imagem : 'img/blog-img/b18.jpg',
        texto_curto : 'testeeee'
    },
    {   
        titulo_curto : 'Atividade 2',
        titulo : 'Atividade 2: Arroz',
        texto : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora praesentium consequuntur doloremque numquam magnam impedit dolorem expedita, doloribus odio repudiandae, corporis nemo commodi modi provident quasi. Aut cum error molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum unde ipsum delectus beatae dicta eligendi maxime recusandae fugit quod provident debitis asperiores, corporis quasi aliquid. Cum nostrum at sequi libero!',
        imagem : 'img/blog-img/b18.jpg',
        texto_curto : ''
    },
    {   
        titulo_curto : 'Atividade 3',
        titulo : 'Atividade 3: Fejao',
        texto : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora praesentium consequuntur doloremque numquam magnam impedit dolorem expedita, doloribus odio repudiandae, corporis nemo commodi modi provident quasi. Aut cum error molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum unde ipsum delectus beatae dicta eligendi maxime recusandae fugit quod provident debitis asperiores, corporis quasi aliquid. Cum nostrum at sequi libero!',
        imagem : 'img/blog-img/b18.jpg',
        texto_curto : ''
    }
];
var projetos = [
{
    src : "img/jogos/gestus.png",
    nome : "Gestus",
    ano : 2020,
    tipo : "site",
    conteudo : '<p>"Melhorar a vida das pessoas desenvolvendo projetos de impacto social com um time forte sonhador" Essa é a missão do Time Enactus UFC , o qual desenvolve 4 projetos de impacto social com base nos Objetivos de Desenvolvimento Sustentável (ODSs) da ONU. Nesse contexto, 9,7 milhões de brasileiros são surdos, dos quais 70% não compreende plenamente a língua portuguesa e apenas 1% tem carteira de trabalho assinada, segundo o último Censo do IBGE. Pensando nessa problemática o Time desenvolveu o Projeto Caleidoscópio, que visa ao empoderamento da comunidade surda por meio do apoio institucional à ASOF (Associação dos Surdos Organizados de Fortaleza), de modo a desenvolver ações que fomentem o empreendedorismo na Associação e da aplicação do Gestus - recurso educativo digital voltado para sensibilização de crianças em idade escolar sobre a cultura surda e Língua de Sinais - em escolas de Fortaleza e Região Metropolitana</p><p>O contato tardio com a LIBRAS (Língua Brasileira de Sinais) é um dos principais obstáculos enfrentados pelas escolas quanto à inclusão de alunos surdos na chamada sala de aula convencional. Isso ocorre porque não há incentivo para aprender LIBRAS, assim como existe no idioma português, embora ambos sejam idiomas oficiais do Brasil. O Projeto Gestus visa aproximar o contato de crianças, entre 7 e 10 anos, com o ensino da LIBRAS, a fim de tornar natural esse processo de aquisição da língua do segundo país, bem como o processo de adaptação de crianças ouvintes com surdos crianças no mesmo espaço escolar.</p>',
    participacao : '<h5>Minha participação no <b>Gestus - Enactus UFC</b></h5><p>Entrei na Enactus em março de 2020 com o objetivo de aprimorar o desenvolvimento do jogo do Gestus, implementar a fase final e participar da criação da fase ambiental do jogo.</p>',
    linguagens : ['HTML','CSS','JavaScript', 'JQuery'],
    codigo : 'https://github.com/gestusjogo/gestusjogo.github.io',
    site : 'https://gestusjogo.github.io/'
}
];
var trabalhos = [];
var linksAtvHeader = '';
var linksTrabHeader = '';
var linksAtvFooter = '';
var linksTrabFooter = '';
for(var i = 0; i < atividades.length; i++){
    linksAtvFooter += '<li><a href="atividade.html?id='+i+'" class="semLink">'+atividades[i].titulo_curto+'</a></li>';
    linksAtvHeader += '<a class="dropdown-item" href="atividade.html?id='+i+'">'+atividades[i].titulo_curto+'</a>';
}
for(var i = 0; i < trabalhos.length; i++){
    linksTrabFooter += '<li><a href="trabalho.html?id='+i+'" class="semLink">'+trabalhos[i].titulo_curto+'</a></li>';
    linksTrabHeader += '<a class="dropdown-item" href="trabalho.html?id='+i+'">'+trabalhos[i].titulo_curto+'</a>';
}
$('.linksAtvHeader').html(linksAtvHeader);
$('.linksTrabHeader').html(linksTrabHeader);
$('.linksAtvFooter').html(linksAtvFooter);
$('.linksTrabFooter').html(linksTrabFooter);
