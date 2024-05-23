<?php
// autenticar.php

// Obtener el email y la contraseña proporcionados por el usuario
$email_usuario = $_POST["email"];
$contraseña_usuario = $_POST["contraseña"];

// Obtener la contraseña encriptada almacenada en la base de datos (según el email del usuario)
// (debes adaptar esto a tu estructura de base de datos)
// Ejemplo:
 $sql = "SELECT contraseña FROM metal WHERE email = ?";
// ...

// Desencriptar la contraseña almacenada
$contraseña_encriptada_db = "la_contraseña_encriptada_de_la_base_de_datos"; // Obtén esto de la base de datos
$contraseña_desencriptada = openssl_decrypt($contraseña_encriptada_db, 'aes-256-cbc', $clave_secreta, 0, '1234567890123456'); // Cambia el IV según tus necesidades

// Comparar las contraseñas
if ($contraseña_usuario === $contraseña_desencriptada) {
    // Usuario autenticado correctamente
    // Puedes redirigirlo a una página de inicio o mostrar un mensaje de éxito
    echo "¡Inicio de sesión exitoso!";
} else {
    // Contraseña incorrecta
    echo "Usuario o contraseña incorrectos.";
}
?>
