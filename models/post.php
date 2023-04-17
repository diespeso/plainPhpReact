<?php
    require_once __DIR__ . "../../db.php";
    require_once __DIR__ . "../../models/comment.php";

    class Post implements JsonSerializable {
        protected int $id;
        protected string $title;
        protected string $content;
        protected int $userId;
        protected array $comments;

        public function __construct($array) {
            $this->id = $array["id"];
            $this->title = $array["title"];
            $this->content = $array["content"];
            $this->userId = $array["user_id"]; 
            // comments?
            $this->comments = $array["comments"];
            $this->userName = $array["user_name"];
        }

        public function jsonSerialize(): mixed
        {
            return [
                "id" => $this->id,
                "title" => $this->title,
                "content" => $this->content,
                "user_id" => $this->userId,
                "comments" => $this->comments,
                "user_name" => $this->userName,
            ];
        }

        public function __toString(): string {
            return $this->id . "|" . $this->title . "|" . $this->content . "|" . $this->userId;
        }

        public static function getAllByUserId(int $userId): array {
            $conn = Db::openConnection();
            $query = <<<EOD
                select p.*, u.name as user_name from posts p
                inner join users u on p.user_id = u.id
                where p.user_id = $userId;
            EOD;
            $dbPosts = $conn->query(
                $query,
            )->fetch_all(MYSQLI_ASSOC);
    
            Db::closeConnection($conn);

            return array_map(function ($post) {
                $post["comments"] = Comment::fetchAllByPostId($post["id"]);
                $post["comments"] = Comment::organize($post["comments"]);

                return $post;
                // return new Post($post);
            }, $dbPosts) ?? [];
        }
    }
?>