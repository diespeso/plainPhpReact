<?php
    require_once __DIR__ . "../../models/user.php";

    $id = htmlspecialchars($_GET["id"]);

    $user = User::getOne($id);
    header("Content-Type: application/json");
    echo json_encode($user);
?>