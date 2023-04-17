<?php
    require_once __DIR__ . "../../models/user.php";

    $email = $_POST["email"];
    $name = $_POST["name"];
    $password = $_POST["password"];
    
    $user = new User($name, $email, $password);
    $user->save();
?>