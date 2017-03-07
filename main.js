/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {

    $(".bt-box").click(function () {
        var id = $(this).data('key');
        $("#menu-padrao").hide('slow');
        $("#low-menu").removeClass("hide").show('slow');
        $("div[name^='modulo']").addClass('hide');
        $("div[name='modulo_" + id + "']").removeClass("hide");
        $(".bs-glyphicons-list").show();
    });
    
    $(".return_principal").on("click", function(){
        var key = $(this).data("key");
        var nivel = $(this).data('nivel');
        var id_form = $(this).data("form");
        
        if(typeof(nivel) === 'undefined'){
            nivel = "../";
        }
        
        if(typeof(id_form) === 'undefined'){
            id_form = "form1";
        }
        
        if ( !$("form[id='"+home+"']").length ){
            $("body").append($('<form>',{id: id_form}));
        }
        
        if ( !$("input:hidden[name='home']").length ){
            $("#"+id_form).append($('<input>',{name : 'home',type: 'hidden',value: key}));
        }
        
        $("#home").val(key);
        $("#"+id_form).unbind();
        $("#"+id_form).attr('action',nivel);
        $("#"+id_form).submit();
    });
    
    $(".link-sem-get").on("click", function(){
        var url = $(this).data("url");
        var target = $(this).data("target");
        $('body').append($('<form>', { id: 'form-link-sem-get', method: 'post', action: url, target: target }));
        $("#form-link-sem-get > input").remove();
        $.each($(this).data() , function(index, value){
            if(index != 'target' && index != 'url'){
                if ( !$("input:hidden[name='"+index+"']").length ){
                    $("#form-link-sem-get").append(
                        $('<input>',{
                            name : index,
                            type: 'hidden',
                            value: value
                        })
                    );
                } else {
                    $("input:hidden[name='"+index+"']").val(value);
                }
            }
        });
        //
//        console.log($("#form-link-sem-get"));
        //$("#"+id_form).attr('action',nivel);
        $("#form-link-sem-get").submit();
    });
    
    var home = $("#home").val();
    if(home != ""){
        var id = home;
        $("#menu-padrao").hide('slow');
        $("#low-menu").removeClass("hide").show('slow');
        $("div[name^='modulo']").addClass('hide');
        $("div[name='modulo_" + id + "']").removeClass("hide");
        $(".bs-glyphicons-list").show();
    }
    
    $("#volta-principal").click(function () {
        $("#menu-padrao").removeClass('hide').show('slow');
        $("#low-menu").hide('slow');
        $("div[name^='modulo']").addClass('hide');
    });
    
    $("#anexo_cad").click(function () {
        if ($(this).is(":checked")) {
            $("#file_cadsuporte").show();
        } else {
            $("#file_cadsuporte").hide();
            $("#file_cadsuporte input").val('');
        }
    });
    
    $("#volta_index").click(function () {
        var nivel = $(this).data('nivel');
        var _nivel = "";
        if (nivel !== "undefined") {
            for (var i = 0; i < nivel; i++) {
                _nivel += "../";
            }
        }
        //console.log(nivel);
        //console.log(_nivel, 'nivel');
        $(window.location).attr('href', _nivel + 'index.php');
    });

    //acao de clique ao voltar
//    var volta = $("#volta").val();      
//    if(volta != ''){
//        $("#filtrar").trigger("click");
//    }

    $('#low-menu').tooltip();
    
    $("[data-toggle='tooltip']").tooltip(); 

    if ($("#msg").val() != '') {
        $(".msg_cadsuporte").show();
    }

    /*$(".bs-glyphicons-list li").click(function(){
     var url = $(this).data('url');
     var key = $(this).data('key');
     
     document.location = url;
     
     });*/

    // Botão VOLTAR AO TOPO
    // Determinamos quando aparece ou desaparece 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {// Se estivermos 100px ou mais abaixo da página, o botão aparece 
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut(); // Caso contrário, desaparece 
        }
    });

    // O que acontece quando é clicado 
    $('#top').click(function () { // Quando o botão é clicado 
        $("html, body").animate({scrollTop: 0}, 'slow'); // A nossa página vai fazer "scrollTop" a uma velocidade de 600 
        return false;
    });
    // Fim do Botão VOLTAR AO TOPO

    // coloca datepicker em qualquer input com classe .data
    if (typeof $.datepicker === 'object') {
        $('.data').datepicker({
            dateFormat: 'dd/mm/yy',
            changeMonth: true,
            changeYear: true,
            yearRange: '2005:c+1',
            beforeShow: function () {
                setTimeout(function () {
                    $('.ui-datepicker').css('z-index', 5010);
                }, 0);
            }
        });
    }
    // coloca marcara em qualquer input com a classe .data
    if (typeof $.mask === 'object') {
        $(".data").mask("99/99/9999", {placeholder: " "});
    }

});

// BootstrapDialog -------------------------------------------------------------
if (typeof BootstrapDialog === 'function') {
    /**
     * Alert window
     * 
     * @param {type} message
     * @param {type} title
     * @param {type} callback
     * @param {type} type
     * @returns {undefined}
     */
    BootstrapDialog.alert = function (message, title, callback, type) {
        if (typeof title === 'undefined' || title === '' || title === null) {
            title = 'Alerta';
        }
        if (typeof type === 'undefined' || type === '' || type === null) {
            type = 'primary';
        }
        new BootstrapDialog({
            nl2br: false,
            type: 'type-' + type,
            title: title,
            message: message,
            data: {
                'callback': callback
            },
            closable: false,
            buttons: [{
                    label: 'OK',
                    action: function (dialog) {
                        typeof dialog.getData('callback') === 'function' && dialog.getData('callback')(true);
                        dialog.close();
                    }
                }]
        }).open();
    };

    /**
     * Confirm window
     * 
     * @param {type} message
     * @param {type} tyle
     * @param {type} callback
     * @param {type} type
     * @returns {undefined}
     */
    BootstrapDialog.confirm = function (message, title, callback, type) {
        if (typeof title === 'undefined' || title === '' || title === null) {
            title = 'Confirmação';
        }
        if (typeof type === 'undefined' || type === '' || type === null) {
            type = 'primary';
        }
        new BootstrapDialog({
            nl2br: false,
            title: title,
            message: message,
            closable: false,
            type: 'type-' + type,
            data: {
                'callback': callback
            },
            buttons: [{
                    label: 'Cancelar',
                    action: function (dialog) {
                        typeof dialog.getData('callback') === 'function' && dialog.getData('callback')(false);
                        dialog.close();
                    }
                }, {
                    label: 'OK',
                    cssClass: 'btn-' + type,
                    action: function (dialog) {
                        typeof dialog.getData('callback') === 'function' && dialog.getData('callback')(true);
                        dialog.close();
                    }
                }]
        }).open();
    };

    /*
     * alias para alert
     */
    var bootAlert = function (message, title, callback, type) {
        BootstrapDialog.alert(message, title, callback, type);
    };

    /*
     * alias para Confirm
     */
    var bootConfirm = function (message, title, callback, type) {
        BootstrapDialog.confirm(message, title, callback, type);
    };

    /*
     * alias para Dialog
     */
    var bootDialog = function (message, title, buttons, type) {
        if (typeof title === 'undefined' || title === '' || title === null) {
            title = 'Mensagem';
        }
        if (typeof type === 'undefined' || type === '' || type === null) {
            type = 'primary';
        }
        BootstrapDialog.show({
            nl2br: false,
            title: title,
            message: message,
            type: 'type-' + type,
            buttons: buttons
        });
    };

    $('.sonumeros').keypress(function (event) {
        var tecla = (window.event) ? event.keyCode : event.which;
        if ((tecla > 47 && tecla < 58))
            return true;
        else {
            if (tecla != 8)
                return false;
            else
                return true;
        }
    });

    // funcao para converter data do formato br para o americano
    var converteData = function (data, separador_atual) {
        if (separador_atual == '') {
            separador_atual = '/';
        }
        var dataArr = data.split(' ')[0].split(separador_atual);
        var separador = ((separador_atual === '/')?'-':'/');
        return dataArr[2] + separador + dataArr[1] + separador + dataArr[0];
    };
    
    function cria_carregando_modal(){
        $("body").append(
            $("<div>",{id:"carregando", class:"modal fade"})
                .append($('<div>',{class:"modal-dialog text-center no-margin-t", style:"width: 100%; height:100%; margin-top: 0!important; padding-top: 25%;"})
                    .append($('<img>',{src:location.protocol+"//"+location.host+"/intranet/imagens/loading2.gif", style:"height: 100px;"}))
                )
        );
        $('#carregando').modal('show');
    }
    
    function remove_carregando_modal(){
        $('#carregando').modal('hide');
//        $('#carregando').remove();            
//        $('.modal-backdrop').remove();
    }
    if(typeof $(".valor").maskMoney === 'function'){
        $(".valor").maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:','});
    }
    
    //////////CONFIGURAÇÃO DE FILTRO
    
    $('body').on('click', '#config_filtro', function(){
        console.log($(this).data('tabela'));
        $.post(location.protocol+"//"+location.host+"/intranet/relatorios/configurar_filtro_relatorio.php", {bugger:Math.random(), id_relatorio:$(this).data('relatorio'), id_botao:$(this).data('botao'), tabela:$(this).data('tabela')}, function(resultado){
            BootstrapDialog.show({
                nl2br: false,
                size: BootstrapDialog.SIZE_WIDE,
                title: 'Configuração de Filtro',
                message: resultado,
                closable: false,
                type: 'type-info',
                data: {
                    'callback': 'callback'
                },
                buttons: [{
                        label: 'Cancelar',
                        action: function (dialog) {
                            typeof dialog.getData('callback') === 'function' && dialog.getData('callback')(false);
                            dialog.close();
                        }
                    }, {
                        label: 'Salvar',
                        cssClass: 'btn-info',
                        action: function (dialog) {
                            typeof dialog.getData('callback') === 'function' && dialog.getData('callback')(true);
                            $('#form_config_relat').submit();
                            //dialog.close();
                        }
                    }]
            });
        });
    });
    
    $('body').on('click', '.switcher', function(){
        var $this = $(this);
        $this.find('input').prop('checked', !$this.find('input').prop('checked'));
        if($this.find('input').prop('checked')){
            $this.find('.switcher-state-on').show();
            $this.find('.switcher-state-off').hide();
            $this.addClass('checked');
        } else {
            $this.find('.switcher-state-on').hide();
            $this.find('.switcher-state-off').show();
            $this.removeClass('checked');
        }
        //console.log($this.find('input').prop('checked'));
    });
    
    ////////////////////////////////

}