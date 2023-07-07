<?php

class DB {
    function connect(){
        $conn = mysqli_connect('spaceInvaders', 'root', '', 'spaceInvaders');
        return $conn;
    }
}