<?php

include "../Core/classes/DB.php";
include "../Core/classes/User.php";

$db = new DB();
$conn = $db->connect();
$user = new User();
$row = $user->getAllUser($conn);
$record = 0;

if(empty($row)){
    $record = 0;
}
else{
    foreach ($row as $item){
        if($item['nickname']===$_GET['name']){
            $record = $item['record'];
        }
    }
}

?>


<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <?php
        include '../components/gameplayJsConnect.php';
    ?>

    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="stylesheet" href="../assets/css/game.css">

</head>

<body>

<div class="wrapper">
    <div class="game">
        <div class="game__frame">
            <div class="game_field">
                <div class="pause">
                    <img src="../assets/img/pause.png" alt="" class="pauseImg">
                    <h1 class="pauseCount">3</h1>
                </div>
                <div class="space">
                    <div class="enemBullet"></div>
                    <div class="notEnemies"></div>

                    <?php
                    include '../components/enemies.php'
                    ?>

                    <div class="row">
                        <div class="bullet" data-x="0" data-y="0" data-position="10"></div>
                        <div class="block" data-x="0" data-y="0" data-position="0"></div>
                    </div>
                </div>

                <div class="game_menuBar">
                    <div class="game_menuColumn">
                        <div class="logo">
                            <h1 style="color: yellow;" class="logoText">Space</h1>
                            <h1 style="color: red" class="logoText">Invaders</h1>
                        </div>

                        <div class="menu_stats">
                            <div class="timerRow">
                                <h1>Timer: </h1>
                                <h1 class="timer">60</h1>
                                <h1>s</h1>
                            </div>

                            <div class="countRow">
                                <h1>Points: </h1>
                                <h1 class="count">0</h1>
                                <img src="../assets/img/enemies.png" alt="" class="countImg">
                            </div>

                            <div class="countRow">
                                <h1>Name: </h1>
                                <h1 class="nickname"><?= $_GET['name']?></h1>
                            </div>

                            <div class="recordRow">
                                <h1>Record:</h1>
                                <h1 style="color: yellow"><?= $record?></h1>
                            </div>

                            <div class="lifeRow">
                                <h1>Life: </h1>
                                <div class="lifeImgBlock">
                                    <div class="life"></div>
                                    <div class="life"></div>
                                    <div class="life"></div>
                                </div>
                            </div>
                        </div>

                        <div class="buttons">
                            <div class="pauseButton" data-pause="0"></div>
                            <img src="../assets/img/close.png" alt="" class="gameClose">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>