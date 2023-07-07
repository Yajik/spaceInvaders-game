<?php

class User extends DB
{
    function newUser($name, $points, $conn){
        $sql = "INSERT INTO users SET nickname='$name', record='$points'";
        $conn->query($sql);
    }
    function updateUser($name, $points, $conn){
        $sql = "UPDATE users SET record='$points' WHERE nickname='$name'";

        $conn->query($sql);
        return $conn->query($sql);
    }

    function getAllUser($conn){
        $sql = 'SELECT * FROM users ORDER BY record DESC';
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        return $row;
    }

    function sortUser($conn){

    }
}