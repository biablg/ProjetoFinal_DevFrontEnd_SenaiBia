$(function () {
    //Ajax consultando texto
    $.ajax({
        url: 'data/petshop.txt',
        success: function (response) {
            //console.log(response);
            //alert('encontrou!!!!');
            //Inserindo o conteudo do response após a tag <h1>
            $('h1').after('<h2>' + response + '</h2>');
        },
        error: function () {
            alert('Ocorreu um erro!!!');
        }
    });
    
    //ajax consulta json
    /*$.ajax({
        url: 'texto.json',
        success: function (response) {
            //response é um array JSON com objetos
            //$.each vai iterar esse array
            $.each(response, function (indice, obj) {
                $('#listaUsuarios').append('<li>' + obj.nome + '</li>');
            });
            //alert('encontrou!!!!');
            //Inserindo o conteudo do response após a tag <h1>
            $('h1').after(response);
        },
        error: function () {
            alert('Ocorreu um erro!!!');
        }
    });
*/
});