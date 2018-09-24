$(function () {
    $('#contato').on('submit', function () {
        let erro = 0;

        if ($('#nome').val().search(' ') == -1) {
            $('#erroNome').html("Digite um nome e o sobrenome<br>");
            erro++;
            return false;
        } else {
            $('#erroNome').html("");
        }

        if ($('#email').length > 10) {
            $('#erroEmail').html("Digite um e-mail com mais de 10 caracteres!!!<br>");
            erro++;
            return false;
            //verificar se o e-mail e válido 
        } else if ($('#email').val().search('@') == -1) {
            $('#erroEmail').html("Digite um e-mail valido<br>");
            erro++;
            return false;
        }
        else if ($('#email').val().search('.com') == -1) {
            $('#erroEmail').html("Digite um e-mail valido<br>");
            erro++;
            return false;
        } else {
            $('#erroEmail').html("");
        }

        //Validação do campo Assunto
        if ($('#assunto').val() == "") {
            $('#erroAssunto').html("Selecione uma opção <br>");
            erro++;
            return false;
        } else {
            $('#erroAssunto').html('');
        }

        //Validação da mensagem
        if ($('msg').val() === '') {
            $('#erroMsg').html("Digite uma mensagem!!!<br>");
            erro++;
            return false;
        } else {
            $('#erroMsg').html('');
        }
        //evita de o formulario ser submetido e a página ser recarregada
        event.preventDefault();

        //Capturar os dados digitados
        let nome = $('#nome').val();
        let email = $('#email').val();
        let assunto = $('#assunto').val();
        let mensagem = $('#msg').val();

        //Guardar o que foi digitado em variáveis
        let contato = {
            nome: nome,
            email: email,
            assunto: assunto,
            comentario: mensagem
        }
        //zerar os campos de erros - Pode-se fazer assim?
        $('#erroNome').html("");
        $('#erroEmail').html("");
        $('#erroAsunto').html("");
        $('#erroMsg').html("");
        //Cadastrar apenas se a não houver de erros
        if (erro == 0) {
            var tbContatos;
            if (localStorage.getItem('tbContatos')) {
                tbContatos = JSON.parse(localStorage.getItem('tbContatos'));
            } else {
                tbContatos = [];
            }
            tbContatos.push(contato);
            localStorage.setItem('tbContatos', JSON.stringify(tbContatos));
            alert('Contato enviado com sucesso! Em breve entraremos em contato!');
        }
    });
});