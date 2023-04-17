<?php
    require_once __DIR__ . "../../db.php";

    class User implements JsonSerializable {
        protected int $id;
        protected string $name;
        protected string $email;
        protected string $password;

        // todo use a better approach, more scalable (static create from)
        public function __construct(string $name, string $email, string $password, int $id = -1)
        {
            $this->id = $id;
            $this->name = $name;
            $this->email = $email;
            $this->password = $password;
        }

        public function jsonSerialize(): mixed
        {
            return [
                "id" => $this->id,
                "name" => $this->name,
                "email" => $this->email,
                "password" => $this->password,
            ];
        }

        public static function getOne(int $id): User {
            $conn = Db::openConnection();
            $dbUser = $conn->query("select * from users where id = " . $id . ";")->fetch_assoc();
            DB::closeConnection($conn);
            return new User($dbUser["name"], $dbUser["email"], $dbUser["password"], $dbUser["id"]);
        }

        public function save() {
            $conn = Db::openConnection();

            //encrypt password?

            $result = $conn->query(
                sprintf(
                    "insert into users(name, email, password) values (\"%s\", \"%s\", \"%s\");",
                    $this->name, $this->email, $this->password),
            );

            Db::closeConnection($conn);
        }

        public static function getAll(): array {
            $conn = Db::openConnection();
            $dbUsers = $conn->query("select * from users;")->fetch_all(MYSQLI_ASSOC);
            Db::closeConnection($conn);
            return array_map(function ($user) {
                return new User($user["name"], $user["email"], $user["password"], $user["id"]);
            }, $dbUsers);
        }

        public function __toString(): string {
            return $this->name . "|" . $this->email . "|" . $this->password;
        }
    }
?>