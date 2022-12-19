$(document).ready(function validarFormulario() {

    $('#btnSend').click(function () {

        var errores = '';

        // Validado Nombre ==============================
        if ($('#names').val() == '') {
            errores += '<p>Escriba un Nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Apellido ==============================
        if ($('#nickname').val() == '') {
            errores += '<p>Escriba un Apellido</p>';
            $('#nickname').css("border-bottom-color", "#F14B4B")
        } else {
            $('#nickname').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if ($('#email').val() == '') {
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if ($('#mensaje').val() == '') {
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else {
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if (errores != '') {
            var mensajeModal = '<div class="modal-wrap">' +
                '<div class=" mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);

            // CERRANDO MODAL ==============================

            $('#btnClose').click(function () {
                $('.modal-wrap').remove();
       
            });
            return false;
        } else {
                var mensajeCorrectoModal = '<div id="modal_container" class="Modal_enviado show">' +
                '<div class="Contenedor_modal">' +
                '<h1>"El mensaje ha sido enviado correctamente!"</h1>' +
                // '<span id="btnSendAgain">Cerrar</span>' +
                // '<input type="submit" value="Enviar nuevo mensaje" id="btnSendAgain">' +
                '</div>' +
                '</div>'

                $('body').append(mensajeCorrectoModal);
                
                $('#btnSendAgain').click(function () {   
                    // $('#modal_container').remove();  
                    // $('.Modal_enviado ').remove();  
                 $('.Modal_enviado .show').remove(); 
                
                });
                // $('#btnSendAgain').click(function () {
                //     // $('#modal_container').remove();  
                //     return true;
                // });  
                   return true;
                // return false;
        }

    });


});