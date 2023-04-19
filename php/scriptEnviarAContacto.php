<?php
/***
Archivo de configuracion de la mensajeria de los datos */
//llamada-a-los-campos
function php_func_email(){
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

///datos para el correo 'usuario1@correo.com, usuario2@otrocorreo.com';
$destinatario  = "pinto.lucas.nahuel@gmail.com , sullcafernando18@gmail.com";
$asunto = "prueba  de envio de mensaje con php";
$carte = "De: $nombre $apellido\n";
$carte .= "Correo: $correo\n";
$carte .= "Mensaje: $mensaje";
// echo "$asunto $carte $destinatario" ;
//enviando mensaje
mail($destinatario,$asunto,$carte);
// header('Location:../contacto.html');
 echo'<script type="text/javascript"> 
 location.href="../contacto.html";
	</script>';
}
php_func_email();
?>