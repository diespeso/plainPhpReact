<?php
    require_once __DIR__ . "../../models/comment.php";

    /*
    $content = $_POST["content"];
    $userId = $_POST["user_id"];
    $postId = $_POST["post_id"];
    $parentId = $_POST["parent_id"];
    */

    // NEEDED LIKE THIS SINCE ITS CONTENT-TYPE: JSON
    $_POST = json_decode(file_get_contents('php://input'), true);

    $comment = new Comment($_POST);
    $comment->save();    
?>