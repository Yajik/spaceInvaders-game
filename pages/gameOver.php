<?php

include '../core/classes/DB.php';
include '../core/classes/User.php';

if(isset($_GET['name'])){
    $db = new DB();
    $conn = $db->connect();
    $user = new User();
    $row = $user->getAllUser($conn);
    $trigger = true;

    if(empty($row)){
        $user->newUser($_GET['name'], $_GET['point'], $conn);
    }
    else{
        foreach ($row as $item){
            if($item['nickname']===$_GET['name']){
                if($item['record']<$_GET['point']){
                    $user->updateUser($_GET['name'], $_GET['point'], $conn);
                }

                $trigger = false;
                break;
            }
        }

        if($trigger===true){
                $user->newUser($_GET['name'], $_GET['point'], $conn);
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

    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="stylesheet" href="../assets/css/gameOver.css">

</head>

<body>

<div class="wrapper">
    <div class="game">
        <div class="game__frame">
            <div class="gameOver">
                <h1 class="gameOver-title">Game Over</h1>
                <div class='gameOver-name'>
                    <h1>Nickname: </h1>
                    <h1><?=$_GET['name']?></h1>
                    <h1>Points: </h1>
                    <h1><?=$_GET['point']?></h1>
                </div>
                <form action="leaderBoard.php" method="post">
                    <input type="text" value="<?= $_GET['name']?>" name="name" class="none">
                    <input type="text" value="<?= $_GET['point']?>" name="point" class="none">
                    <button class="next">Continue</button>
                </form>
            </div>
        </div>
    </div>
</div>


</body>
</html>


<style>

</style>

<?php



?>