<?php

    class Db {
        public static function openConnection() {
            $dbhost = "localhost";
            $dbuser = "root";
            $dbpass = "";
            $dbname = "phptest";
    
            $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
    
            return $conn;
        }

        public static function closeConnection($conn) {
            $conn->close();
        }
    }
?>