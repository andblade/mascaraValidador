/*

    Script de VALIDAÇÃO e MÁSCARA de formulário
    para CPF, CNPJ, RG, E-mail, Arquivo, Data de nascimento,
    Data de período, Telefone, Celular, Seleção, Radio, CEP,
    Endereço, Número, Bairro, Cidade, UF, Observação/Mensagem,
    Senha e Check.

    Publicado em 20/09/2019

    Por Anderson Romão
    Github: https://github.com/andblade

*/



/*
    MASCARA
*/
// Mascara CPF
$("[mask-cpf]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskCPF($this.val()))
    })
});
function maskCPF(cpf){
    cpf = cpf.replace( /\D/g,""); //Remove tudo o que não é dígito
    cpf = cpf.replace( /^(\d{3})$/,"$1");
    cpf = cpf.replace( /^(\d{3})(\d{3})$/,"$1.$2");
    cpf = cpf.replace( /^(\d{3})(\d{3})(\d{3})$/,"$1.$2.$3");
    cpf = cpf.replace( /^(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4");
    return cpf;
}

// Mascara CNPJ
$("[mask-cnpj]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskCNPJ($this.val()))
    })
});
function maskCNPJ(cnpj){
    cnpj = cnpj.replace( /\D/g,""); 
    cnpj = cnpj.replace( /^(\d{2})$/,"$1");
    cnpj = cnpj.replace( /^(\d{2})(\d{3})$/,"$1.$2");
    cnpj = cnpj.replace( /^(\d{2})(\d{3})(\d{3})$/,"$1.$2.$3");
    cnpj = cnpj.replace( /^(\d{2})(\d{3})(\d{3})(\d{4})$/,"$1.$2.$3/$4");
    cnpj = cnpj.replace( /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5");
    return cnpj;
}

// Mascara RG
$("[mask-rg]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskRG($this.val()))
    })
});
function maskRG(rg){
    rg = rg.replace( /\D/g,"");
    rg = rg.replace(/^(\d{2})$/,"$1");
    rg = rg.replace(/^(\d{2})(\d{3})$/,"$1.$2");
    rg = rg.replace(/^(\d{2})(\d{3})(\d{3})$/,"$1.$2.$3");
    rg = rg.replace(/^(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
    return rg;
}

// Mascara CPF e CNPJ
$("[mask-cnpj-cpf]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskCPFCNPJ($this.val()))
    })
});
function maskCPFCNPJ(CpfCnpj){
    CpfCnpj = CpfCnpj.replace( /\D/g,""); 
    CpfCnpj = CpfCnpj.replace( /(\d{18})$/,"$1");
    return CpfCnpj;
}

// Mascara Nascimento
$("[mask-nascimento]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskNASCIMENTO($this.val()))
    })
});
function maskNASCIMENTO(nascimento){
    nascimento = nascimento.replace( /\D/g , "");
    nascimento = nascimento.replace(/^(\d{2})/,'$1');
    nascimento = nascimento.replace(/^(\d{2})(\d{2})$/,'$1/$2');
    nascimento = nascimento.replace(/^(\d{2})(\d{2})(\d{4})$/,'$1/$2/$3');   
    return nascimento;
}

// Mascara Periodo
$("[mask-periodo]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskPERIODO($this.val()))
    })
});
function maskPERIODO(periodo){
    periodo = periodo.replace(/\D/g,"");
    periodo = periodo.replace(/(\d{2})(\d{2})(\d{4})$/,"$1/$2/$3");
    return periodo;
}

// Mascara Telefone
$("[mask-telefone]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskTELEFONE($this.val()))
    })
});
function maskTELEFONE(telefone){
    telefone = telefone.replace( /\D/g , "");
    telefone = telefone.replace(/^(\d{2})/,'($1)');
    telefone = telefone.replace(/(\d{4})(\d{4})$/,'$1-$2');
    return telefone;
}

// Mascara Celular
$("[mask-celular]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskCELULAR($this.val()))
    })
});
function maskCELULAR(celular){
    celular = celular.replace( /\D/g , "");
    celular = celular.replace(/^(\d{2})/,'($1)');
    celular = celular.replace(/(\d{5})(\d{4})$/,'$1-$2');
    return celular;
}

// Mascara CEP
$("[mask-cep]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskCEP($this.val()))
    })
});
function maskCEP(cep){
    cep = cep.replace( /\D/g,"");
    cep = cep.replace(/(\d{2})(\d{3})(\d{3})$/,"$1.$2-$3");
    return cep;
}



/*
    VALIDAÇÃO

    Exemplos
    // $("#teste").removeClass("d-none").html("<p class='alertStyle'>Um texto</p>");

*/ 
$(".alertError").css({
    "font-style": "italic",
    "font-size": "13px",
    "color": "#dc3545"
});

// Validar CPF
$("[valida-cpf]").blur(function(){
    var cpf = this.value;
    cpf = cpf.replace(".", "");
    cpf = cpf.replace(".", "");
    cpf = cpf.replace("-", "");

    if( cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" ){
        $("#alertCPF").removeClass("d-none").html("<p class='alertError'>CPF inválido.</p>");
        return false;
    }
    soma = 0;
    for(i = 0; i < 9; i++){
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }   
    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11){
        resto = 0;
    }
    if(resto != parseInt(cpf.charAt(9))){
        $("#alertCPF").removeClass("d-none").html("<p class='alertError'>CPF inválido.</p>");
        return false;
    }
    soma = 0;
    for(i = 0; i < 10; i ++){
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11){
        resto = 0;
    }   
    if(resto != parseInt(cpf.charAt(10))){
        $("#alertCPF").removeClass("d-none").html("<p class='alertError'>CPF inválido.</p>");
        return false;
    }else{
        $("#alertCPF").addClass("d-none");
        return true;
    }
    return true;
});

// Validar CNPJ
$("[valida-cnpj]").blur(function(){
    var cnpj = this.value;
    var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
    var dig1= new Number;
    var dig2= new Number;

    exp = /\.|\-|\//g
    cnpj = cnpj.toString().replace( exp, "" );

    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999"){
        $("#alertCNPJ").removeClass("d-none").html("<p class='alertError'>CNPJ inválido.</p>");
        // $("#alertCNPJ").removeClass("d-none");
        return false;
    }

    var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

    for(i = 0; i<valida.length; i++){
        dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
        dig2 += cnpj.charAt(i)*valida[i];       
    }
    dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
    dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));

    if(((dig1*10)+dig2) != digito){
        $("#alertCNPJ").removeClass("d-none").html("<p class='alertError'>CNPJ inválido.</p>");
        // $("#alertCNPJ").removeClass("d-none");
        return false;
    }else{
        $("#alertCNPJ").addClass("d-none");
        return true;
    }
});


// Validar RG
$("[valida-rg]").blur(function(){
    /*

        ???????????/

    */ 
});
     
// Validar CNPJ e CPF mesmo input
$("[valida-cnpj-cpf]").blur(function(){
    valorInput = this.value;

    exp = /\.|\-|\//g
    valorInput = valorInput.toString().replace( exp, "" );

    if (valorInput == ""){
        $("#alertCPF-CNPJ").removeClass("d-none").html("<p class='alertError'>Campo inválido. Favor preencher somente números o campo CPF/CNPJ.</p>");
        return (false);
    }if (((valorInput.length == 11) && (valorInput == 11111111111) ||
        (valorInput == 22222222222) || (valorInput == 33333333333) ||
        (valorInput == 44444444444) || (valorInput == 55555555555) ||
        (valorInput == 66666666666) || (valorInput == 77777777777) ||
        (valorInput == 88888888888) || (valorInput == 99999999999) ||
        (valorInput == 00000000000))){
        
        $("#alertCPF-CNPJ").removeClass("d-none").html("<p class='alertError'>CPF/CNPJ inválido.</p>");
        return (false);
    }

    if (!((valorInput.length == 11) || (valorInput.length == 14))){
        $("#alertCPF-CNPJ").removeClass("d-none").html("<p class='alertError'>CPF/CNPJ inválido.</p>");
        return (false);
    }

    var checkOK = "0123456789";
    var checkStr = valorInput;
    var allValid = true;
    var allNum = "";
    
    for (i = 0;  i < checkStr.length;  i++){
        ch = checkStr.charAt(i);
        for (j = 0;  j < checkOK.length;  j++)
            if (ch == checkOK.charAt(j))
            break;
        if (j == checkOK.length){
            allValid = false;
            break;
        }allNum += ch;
    }if (!allValid){
        $("#alertCPF-CNPJ").removeClass("d-none").html("<p class='alertError'>Campo inválido. Favor preencher somente números o campo CPF/CNPJ.</p>");
        return (false);
    }

    var chkVal = allNum;
    var prsVal = parseFloat(allNum);
    if (chkVal != "" && !(prsVal > "0")){
        alert("CPF zerado !");
        return (false);
    }

    if (valorInput.length == 11){
        var tot = 0;

        for (i = 2;  i <= 10;  i++)
        tot += i * parseInt(checkStr.charAt(10 - i));

        if ((tot * 10 % 11 % 10) != parseInt(checkStr.charAt(9))){
            $("#alertCPF-CNPJ").removeClass("d-none").html("<p class='alertError'>CPF/CNPJ inválido.</p>");
            return (false);
        }
      
        tot = 0;
      
        for (i = 2;  i <= 11;  i++)
            tot += i * parseInt(checkStr.charAt(11 - i));

        if ((tot * 10 % 11 % 10) != parseInt(checkStr.charAt(10))){
            $("#alertCPF-CNPJ").removeClass("d-none").html("<p class='alertError'>CPF/CNPJ inválido.</p>");
            return (false);
        }else{
            // $("#alertCPF-CNPJ").addClass("d-none").html("<p class='alertError'>Campo inválido. Favor preencher somente números o campo CPF/CNPJ.</p>");
            $("#alertCPF-CNPJ").addClass("d-none").html("<p class='alertError'>CPF/CNPJ inválido.</p>");
            return(true);
        }
    }
    else{
        var tot  = 0;
        var peso = 2;

        for (i = 0;  i <= 11;  i++){
            tot += peso * parseInt(checkStr.charAt(11 - i));
            peso++;
            if (peso == 10){
                peso = 2;
            }
        }
        if ((tot * 10 % 11 % 10) != parseInt(checkStr.charAt(12))){
            $("#alertCPF-CNPJ").removeClass("d-none").html("<p class='alertError'>CPF/CNPJ inválido.</p>");
            return (false);
        }else{
            // $("#alertCPF-CNPJ").addClass("d-none").html("<p class='alertError'>Campo inválido. Favor preencher somente números o campo CPF/CNPJ.</p>");
            $("#alertCPF-CNPJ").addClass("d-none").html("<p class='alertError'>CPF/CNPJ inválido.</p>");
            return(true);
        }
        
        tot  = 0;
        peso = 2;

        for (i = 0;  i <= 12;  i++){
            tot += peso * parseInt(checkStr.charAt(12 - i));
            peso++;
            if (peso == 10){
                peso = 2;
            }
        }

        if ((tot * 10 % 11 % 10) != parseInt(checkStr.charAt(13))){
            $("#alertCPF-CNPJ").removeClass("d-none").html("<p class='alertError'>CPF/CNPJ inválido.</p>");
            return (false);
        }else{
            // $("#alertCPF-CNPJ").addClass("d-none").html("<p class='alertError'>Campo inválido. Favor preencher somente números o campo CPF/CNPJ.</p>");
            $("#alertCPF-CNPJ").addClass("d-none").html("<p class='alertError'>CPF/CNPJ inválido.</p>");
            return(true);
        }
    }
});

// Validar Nome
$("[valida-nome]").blur(function(){
    var nome = this.value;
    if (nome.length <= 3) {
        $("#alertNOME").removeClass("d-none").html("<p class='alertError'>Nome incompleto.</p>");
        // $("[valida-nome]").focus();
        return false;
    }else{
        $("#alertNOME").addClass("d-none");
        return true;
    }
});

// Validar E-mail
$("[valida-email]").blur(function(){
    usuario = this.value.substring(0, this.value.indexOf("@"));
    dominio = this.value.substring(this.value.indexOf("@")+ 1, this.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) && 
        (usuario.search("@")==-1) && 
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) && 
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&      
        (dominio.indexOf(".") >=1)&& 
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        $("#alertEmail").addClass("d-none");
        return true;
    }else{
        $("#alertEmail").removeClass("d-none").html("<p class='alertError'>E-mail inválido.</p>");
        // $("[valida-email]").focus();
        return false;
    }
});

// Validar confirmação de e-mail
$("[valida-confEmail]").blur(function(){
    email = $("[valida-email]").val();
    confirmarEmail = this.value;
    if (confirmarEmail == false){
        $("#alertConfEmail").removeClass("d-none").html("<p class='alertError'>Repita o e-mail corretamente.</p>");
        // $("[valida-confEmail]").focus();
        return false;
    }else if (email != confirmarEmail){
        $("#alertConfEmail").removeClass("d-none").html("<p class='alertError'>Repita o e-mail corretamente.</p>");
        // $("[valida-confEmail]").focus();
        return false;
    }else{
        $("#alertConfEmail").addClass("d-none");
    }
});

// Validar envio de arquivo
$("[valida-arquivo]").blur(function(){
    var arquivo = this.value;
    if (arquivo.length == 0) {
        $("#alertArquivo").removeClass("d-none").html("<p class='alertError'>Arquivo não adicionado.</p>");
        // $("[valida-arquivo]").focus();
        return false;
    }else{
        $("#alertArquivo").addClass("d-none");
        return true;
    }
});

// Validar data de nascimento
$("[valida-nascimento]").blur(function(){
    var data = this.value;
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    var data_array = data.split("-"); // quebra a data em array

    // para o IE onde será inserido no formato dd/MM/yyyy
    if(data_array[0].length != 4){
      data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonta a data no formato yyyy/MM/dd
    }

    // comparo as datas e calculo a idade
    var hoje = new Date();
    var nasc  = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    if(idade >= 0 && idade < 18){
        $("#alertNascimento").removeClass("d-none").html("<p class='alertError'>Menor de 18 anos não pode se cadastrar.</p>");
        // $("[valida-nascimento]").focus();
        return false;
    }else if (idade >= 18 && idade <= 90) {
        $("#alertNascimento").addClass("d-none");
        // console.log('Maior de 18 anos!');
        return true;
    }else if (idade < 0) {
        $("#alertNascimento").removeClass("d-none").html("<p class='alertError'>Data de nascimento inválida.</p>");
        // $("[valida-nascimento]").focus();
        return false;  
    }else{
        $("#alertNascimento").removeClass("d-none").html("<p class='alertError'>Data de nascimento inválida.</p>");
        // $("[valida-nascimento]").focus();
        return false;  
    }
    return false;
});

// Validar data de período
$("[valida-periodo]").blur(function(){
    let dataUsuario = this.value;
    let dataInicio = new Date('2019-10-10');
    let dataFim = new Date('2019-10-20');

    if (dataUsuario < dataInicio){
        alert('Menor que o período');
    } else if (dataUsuario > dataFim){
        alert('Menor que o período');
    } else if (dataUsuario > dataInicio && dataUsuario < dataFim) {
        alert('Dentro do período');
    } else {
        alert('Data errada');
    }

    // let Atual = new Date();
    // let diasMesAtual = new Date(Atual.getFullYear(), Atual.getMonth()+1, 0).getDate();
    // let mesAtual = Atual.getMonth() + 1 < 10 ? '0' + Atual.getMonth() + 1 : Atual.getMonth() + 1;
    // let anoAtual = Atual.getFullYear();
    // let minDate = anoAtual + '-' + mesAtual + '-01';
    // let maxDate = anoAtual + '-' + mesAtual + '-'+ diasMesAtual;
    // $('input').attr('min', minDate);
    // $('input').attr('max', maxDate);
    // $()
});

// Validar telefone
$("[valida-telefone]").blur(function(){
    var telefone = this.value.replace(/\D/g, '');
    if(telefone.length < 10){
        $("#alertTelefone").removeClass("d-none").html("<p class='alertError'>Telefone inválido.</p>");
        // $("[valida-telefone]").focus();
        return false;
    }else{
        $("#alertTelefone").addClass("d-none");
        return true;
    }
    return false;
});

// Validar Celular
$("[valida-celular]").blur(function(){
    var celular = this.value;
    if(celular.length < 11){
        $("#alertCelular").removeClass("d-none").html("<p class='alertError'>Celular inválido.</p>");
        // $("[valida-celular]").focus();
        return false;
    }else{
        $("#alertCelular").addClass("d-none");
        return true;
    }
    return false;
});

// Validar Seleção
$("[valida-selecao]").blur(function(){
    var opcao = this.value;
    if (opcao == ''){
        $("#alertSelecao").removeClass("d-none").html("<p class='alertError'>Selecione uma opção.</p>");
        // $("[valida-selecao]").focus();
        return false;
    }else{
        $("#alertSelecao").addClass("d-none");
        // console.log('Opção escolhida:<br>' + opcao);
        return true;
    }
});

// Validar opção radio
$("[valida-radio]").blur(function(){
    if($('input[valida-radio]:checked').length < 1){
        $("#alertRadio").removeClass("d-none").html("<p class='alertError'>Escolha uma opção.</p>");
        // $("[valida-radio]").focus();
        return false;
    }else{
        $("#alertRadio").addClass("d-none");
        // console.log('Opção escolhida:<br>' + radio.value);    
    }
    return false;
});

// Validar CEP
$("[valida-cep]").blur(function(){
    //Nova variável "cep" somente com dígitos.
    var cep = this.value.replace(/\D/g, '');
    if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if(validacep.test(cep)) {
            //Preenche os campos com "carregando..." enquanto consulta webservice.
            $('[valida-endereco]').val("carregando...");
            $('[valida-bairro]').val("carregando...");
            $('[valida-cidade]').val("carregando...");
            $('[valida-uf]').val("carregando...");
            //Cria um elemento javascript.
            var script = document.createElement('script');
            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
        }else {
            limpa_formulário_cep();
            $("#alertCEP").removeClass("d-none").html("<p class='alertError'>CEP não encontrado.</p>");
            // $("[valida-cep]").focus();
        }
    }else{
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
        $("#alertCEP").removeClass("d-none").html("<p class='alertError'>CEP não encontrado.</p>");
        // $("[valida-cep]").focus();
    }
    return false;
});
function limpa_formulário_cep(){
    //Limpa valores do formulário de cep.
    $('[valida-endereco]').val("");
    $('[valida-bairro]').val("");
    $('[valida-cidade]').val("");
    $('[valida-uf]').val("");
}
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        $('[valida-endereco]').val(conteudo.logradouro);
        $('[valida-bairro]').val(conteudo.bairro);
        $('[valida-cidade]').val(conteudo.localidade);
        $('[valida-uf]').val(conteudo.uf);

        $("#alertCEP").addClass("d-none");
    }else{
        //CEP não Encontrado.
        limpa_formulário_cep();
        $("#alertCEP").removeClass("d-none").html("<p class='alertError'>CEP não encontrado.</p>");
        // $("[valida-cep]").focus();
    }
}

// Validar endereço
$("[valida-endereco]").blur(function(){
    var endereco = this.value;
    if (endereco == '') {
        $("#alertEnd").removeClass("d-none").html("<p class='alertError'>Endereço não encontrado.</p>");
        // $("[valida-endereco]").focus();
        return false;
    }else{
        $("#alertEnd").addClass("d-none");
        return true;
    }
});

// Validar número residencial
$("[valida-numero]").blur(function(){
    var numero = this.value;
    if (numero == '') {
        $("#alertNum").removeClass("d-none").html("<p class='alertError'>Número não informado.</p>");
        // $("[valida-numero]").focus();
        return false;
    }else{
        $("#alertNum").addClass("d-none");
        return true;
    }
});

// Validar bairro
$("[valida-bairro]").blur(function(){
    var bairro = this.value;
    if (bairro == '') {
        $("#alertBairro").removeClass("d-none").html("<p class='alertError'>Bairro não informado.</p>");
        // $("[valida-bairro]").focus();
        return false;
    }else{
        $("#alertBairro").addClass("d-none");
        return true;
    }
});

// Validar cidade
$("[valida-cidade]").blur(function(){
    var cidade = this.value;
    if (cidade == '') {
        $("#alertCidade").removeClass("d-none").html("<p class='alertError'>Cidade não informada.</p>");
        // $("[valida-cidade]").focus();
        return false;
    }else{
        $("#alertCidade").addClass("d-none");
        return true;
    }
});

// Validar UF
$("[valida-uf]").blur(function(){
    var uf = this.value;
    if (uf == '') {
        $("#alertUF").removeClass("d-none").html("<p class='alertError'>Estado não informado.</p>");
        // $("[valida-uf]").focus();
        return false;
    }else{
        $("#alertUF").addClass("d-none");
        return true;
    }
});

// Validar mensagem / observação
$("[valida-mensagem]").blur(function(){
    var mensagem = this.value;
    if (mensagem.length <= 3) {
        $("#alertMensagem").removeClass("d-none").html("<p class='alertError'>Deixe sua mensagem.</p>");
        // $("[valida-mensagem]").focus();
        return false;
    }else{
        $("#alertMensagem").addClass("d-none");
        return true;
    }
});

// Validar senha
$("[valida-senha]").blur(function(){
    var senha = this.value;
    if (senha.length <= 2) {
        $("#alertSenha").removeClass("d-none").html("<p class='alertError'>Senha não informada.</p>");
        // $("[valida-senha]").focus();
        return false;
    } else {
        $("#alertSenha").addClass("d-none");
        return true;
    }
});

// Validar comparação de senha
$("[valida-confsenha]").blur(function(){
    senha = $("[valida-senha]").val();
    confirmarSenha = this.value;
    if (senha != confirmarSenha){
        $("#alerConfSenha").removeClass("d-none").html("<p class='alertError'>Repita a senha corretamente.</p>");
        // $("[valida-confsenha]").focus();  
        return false;
    }else{
        $("#alerConfSenha").addClass("d-none");
        return true;
    }
});

// Validar checkbox
$("[valida-checkbox]").blur(function(){
    var checkOk = document.getElementsByName("checkbox");
    for (var i = 0; i < checkOk.length; i++) {
        if(checkOk[i].checked == true){
            $("#alertRegulamento").addClass("d-none").html("<p class='alertError'>Aceite o regulamento para proseguir.</p>");
            // console.log('Aceito o regulamento');
        }else{
            $("#alertRegulamento").removeClass("d-none");
            // $("[valida-checkbox]").focus();
            return false;
        }
    }
});

function enviar() {
    $("[required]").each(function(){
        if($(this).val() == "" ){
            // alert('Existem campos que não foram preenchidos.');
            Swal.fire('Existem campos que não foram preenchidos.');
            return false;
        }
    });
    return true;
}