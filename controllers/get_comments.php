<?php
    require_once __DIR__ . "../../models/comment.php";

    $postId = htmlspecialchars($_GET["post_id"]);

    $comments = Comment::fetchAllByPostId($postId);
    header("Content-Type: application/json");
    echo json_encode($comments);
?>