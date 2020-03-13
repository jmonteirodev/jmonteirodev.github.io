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