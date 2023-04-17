<?php
    require_once __DIR__ . "../../models/post.php";

    $userId = htmlspecialchars($_GET["user_id"]);
    
    $posts = Post::getAllByUserId($userId);
    header("Content-Type: application/json");
    echo json_encode($posts);
?>