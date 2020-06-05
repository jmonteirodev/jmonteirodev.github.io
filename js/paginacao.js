var local = "";
var valores = [];
var abas = [1];

function filtrarPaginacao(btn, ano) {
    $("button").removeClass("active");
    $(btn).addClass("active");
    atualizaCertificados(ano);

}
function initPaginacao(local, valores, showDetalhes, isModal, isLink) {
    this.local = local;
    this.valores = valores;
    var botoes = [];
    for (i in valores) {
        if ((botoes.indexOf(valores[i].ano) == -1)) {
            botoes.push(valores[i].ano);
        }
    }
    for (i in botoes) {
        $("#buttons").append('<button type="button" class="btn btn-outline-primary" onclick="filtrarPaginacao(this, ' + botoes[i] + ')" style="margin:10px">' + botoes[i] + '</button>');
    }
    atualizaPaginacao(undefined, showDetalhes);
}
function abaProxima() {
    var aba = $(".active").closest(".page-item").attr("aba");
    aba++;
    $(".page-item").each(function () {
        if ($(this).attr("aba") == aba) {
            atualizaAba($(this));
        }
    });
}
function abaAnterior() {
    var aba = $(".active").closest(".page-item").attr("aba");
    aba--;
    $(".page-item").each(function () {
        if ($(this).attr("aba") == aba) {
            atualizaAba($(this));
        }
    });
}
function atualizaAba(link) {
    var aba = $(link).attr("aba");
    $(".page-item").removeClass("active");
    $(link).addClass("active");
    if (aba > 1) {
        $(".pagination").find(".page-item:first-child").removeClass("disabled");
        if (aba == abas.length) {
            $(".pagination").find(".page-item:last-child").addClass("disabled");
        } else {
            $(".pagination").find(".page-item:last-child").removeClass("disabled");
        }
    } else {
        $(".pagination").find(".page-item:first-child").addClass("disabled");
        $(".pagination").find(".page-item:last-child").removeClass("disabled");
    }
    $(local).html('');
    for (var i = 0; i < valores.length; i++) {
        if (valores[i].aba == aba) {
            var texto = '<div class="col-sm-6 col-md-4 col-lg-3 projeto"';
            if(isModal)
                texto += 'data-toggle="modal" data-target="#modal-certificado" onclick="atualizaModal(\'' + valores[i].id + '\')"';
            if(isLink)
                texto += ' onclick="irPara(\''+valores[i].tipo+'\', \''+valores[i].nome+'\')"';
            texto += '>';
            texto += '        <img src="' + valores[i].src + '" alt="' + valores[i].nome + '" style="width: 100%;">' +
                '        <div class="overlay">';
            if (showDetalhes) {
                texto += '            <div class="text">' + valores[i].nome + '<p style="color: white">' + valores[i].ano + '</p></div>';

            } else {
                texto += '            <div class="text">VER MAIS</div>';
            }
            texto += '        </div>' +
                '    </div>';
            $(local).append(texto);
        }
    }
    mostrarNomes();
}

function mostrarNomes() {
    $(".projeto").mouseover(function () {
        $(this).find(".overlay").css("opacity", 0.8);
    });

    $(".projeto").mouseout(function () {
        $(this).find(".overlay").css("opacity", 0);
    });
}

function atualizaPaginacao(ano, showDetalhes) {
    $(local).html('');
    var temAbas = false;
    var aba = 1;
    abas = [1];
    var contador = 1;
    for (i in valores) {
        if (ano == undefined || valores[i].ano == ano) {
            valores[i].id = contador++;
            valores[i].aba = aba;
            if (valores[i].id % 9 == 0) {
                aba++;
                if (valores[i + 1] != null)
                    abas.push(aba);
            }
            if (valores[i].id <= 9) {
                var texto = '<div class="col-sm-6 col-md-4 col-lg-3 projeto" data-toggle="modal" data-target="#modal-certificado" onclick="atualizaModal(\'' + valores[i].id + '\')">' +
                    '        <img src="' + valores[i].src + '" alt="' + valores[i].nome + '" style="width: 100%;">' +
                    '        <div class="overlay">';
                if (showDetalhes) {
                    texto += '            <div class="text">' + valores[i].nome + '<p style="color: white">' + valores[i].ano + '</p></div>';

                } else {
                    texto += '            <div class="text">VER MAIS</div>';
                }
                texto += '        </div>' +
                    '    </div>';
                $(local).append(texto);
            }
        } else {
            valores[i].id = 0;
            valores[i].aba = 0;
        }
    }
    $(".page-item").each(function () {
        if ($(this).attr("aba") != undefined) {
            $(this).remove();
        }
    });
    console.log(abas);
    if (abas.length > 1) {
        $(".pagination").show();
        for (var i = 0; i < abas.length; i++) {
            var li = '<li class="page-item';
            if (abas[i] == 1) {
                li += " active";
            }
            li += '" aba="' + abas[i] + '" onclick="atualizaAba(this,' + local + ',' + valores + ')"><a class="page-link">' + abas[i] + '</a></li>';
            $(".pagination").append(li);
        }
        $(".pagination").append('<li class="page-item" aba="prox">' +
            '<a class="page-link" aria-label="Next" onclick="abaProxima(' + local + ',' + valores + ')">' +
            '<span aria-hidden="true">&raquo;</span>' +
            '<span class="sr-only">Next</span>' +
            '</a>' +
            '</li>');
    } else {
        $(".pagination").hide();
    }
    mostrarNomes();
}
