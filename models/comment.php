<?php
    require_once __DIR__ . "../../db.php";

    class Comment implements JsonSerializable {

        protected ?int $id;
        protected string $content;
        protected int $userId;
        protected int $postId;
        protected ?int $parentId;

        public function __construct($array) {
            $this->id = $array["id"] ?? null;
            $this->content = $array["content"];
            $this->userId = $array["user_id"];
            $this->postId = $array["post_id"];
            $this->parentId = $array["parent_id"] ?? null;
        }


        public function jsonSerialize(): mixed
        {
            return [
                'id' => $this->id,
                'content' => $this->content,
                'user_id' => $this->userId,
                'post_id' => $this->postId,
                'parent_id' => $this->parentId,
            ];
        }

        public static function fetchAllByPostId(int $postId): array {
            $conn = Db::openConnection();
            $query = <<<EOD
            select c.* from comments c
            inner join posts p on c.post_id = p.id
            where p.id = $postId;
            EOD;
            $dbComments = $conn->query($query)->fetch_all(MYSQLI_ASSOC);
            Db::closeConnection($conn);
            return $dbComments;
        }

        public function save() {
            $conn = Db::openConnection();
            $query = sprintf('
            insert into comments (content, user_id, post_id, parent_id)
            values ("%s", %d, %d, %s);
            ', $this->content, $this->userId, $this->postId, $this->parentId ?? "null");
            $conn->query($query);
            Db::closeConnection($conn);
        }

        public static function organize(array $comments): array {
            $parentNodes = array_filter($comments, function ($comment) {
                return is_null($comment["parent_id"]);
            });
            
            for($i = 0; $i < count($comments); $i++) {
                for($j = 0; $j < count($parentNodes); $j++) {
                    $parentNodes[$j]["replies"] = [];
                    if($comments[$i]["parent_id"] == $parentNodes[$j]["id"]) {
                        $parentNodes[$j]["replies"] = [$comments[$i]];
                    }
                }
            }

            return $parentNodes ?? [];
        }
    }
?>