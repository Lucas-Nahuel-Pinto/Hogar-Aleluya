<?php
/***
Archivo de configuracion de la mensajeria de los datos */
//llamada-a-los-campos
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

//enviando mensaje
mail($desinatario,$asunto,$carte);
header('Location:../contacto-f.html');
?>