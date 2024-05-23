<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario (escapando caracteres especiales)
    $nombre = htmlspecialchars($_POST["nombre"]);
    $apellido = htmlspecialchars($_POST["apellido"]);
    $email = htmlspecialchars($_POST["email"]);
    $telefono = htmlspecialchars($_POST["telefono"]);
    $contraseña = htmlspecialchars($_POST["contraseña"]);
    $producto = htmlspecialchars($_POST["producto"]);

   
    if (empty($nombre) || empty($apellido) || empty($email) || empty($telefono) || empty($contraseña) || empty($producto)) {
        echo "Por favor, completa todos los campos.";
    } else {
        // Generar una clave secreta para encriptar los datos
        $clave_secreta = "mi_clave_secreta"; // Cambia esto a una clave segura y única

        // Encriptar el ID y la contraseña
        $id_encriptado = openssl_encrypt($email, 'aes-256-cbc', $clave_secreta, 0, '245tessera'); // Cambia el IV según tus necesidades
        $contraseña_encriptada = openssl_encrypt($contraseña, 'aes-256-cbc', $clave_secreta, 0, '245tessera'); // Cambia el IV según tus necesidades

        // Conectar a la base de datos de forma segura (usando PDO o MySQLi)
        try {
            $pdo = new PDO("mysql:host=localhost;dbname=nombre_de_tu_base_de_datos", "usuario", "contraseña");
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Insertar los datos en la base de datos de forma segura (usando sentencias preparadas)
            $sql = "INSERT INTO usuarios (nombre, apellido, email, telefono, contraseña, producto) VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$nombre, $apellido, $id_encriptado, $telefono, $contraseña_encriptada, $producto]);

            // Mostrar un mensaje de éxito o redirigir al usuario a otra página
            echo "¡Registro exitoso!";

            // Redirigir al usuario a una página de confirmación o agradecimiento
            // header("Location: confirmacion.html");
            // exit;
        } catch (PDOException $e) {
            echo "Error al insertar en la base de datos: " . $e->getMessage();
        }
    }
}
?>
