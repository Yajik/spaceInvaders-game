<?php
include '../core/classes/DB.php';
include '../core/classes/User.php';

$db = new DB();
$conn = $db->connect();
$user = new User();
$row = $user->getAllUser($conn);

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
    <link rel="stylesheet" href="../assets/css/leaderBoard.css">

</head>

<body>

<div class="wrapper">
    <div class="game">
        <div class="game__frame">
            <div class="leaderBoard">
                <div class="leaderBoardContent">
                    <h1 class="leaderBoard-title">Leader Board</h1>
                    <div class="leaderList">
                        <?php
                        $count = 1;
                        foreach ($row as $item){
                            $style = '';

                            if($count<11){
                                if($item['nickname']===$_POST['name']){
                                    $style = 'background-color: #413a7f';
                                }

                                echo "<div class='leaderList-name' style='$style'><h1>$count .</h1><h1>$item[nickname]</h1><h1>-</h1><h1>$item[record] points</h1></div>";
                            }
                            else{
                                if($item['nickname']===$_POST['name']){
                                    $style = 'background-color: #413a7f';
                                    echo "<div class='leaderList-name' style='$style'><h1>$count.</h1><h1>$item[nickname]</h1><h1>-</h1><h1>$item[record] points</h1></div>";
                                }
                            }

                            $count++;
                        }
                        ?>
                    </div>
                    <form action="../index.php">
                        <button class="next">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


</body>
</html>


<style>

</style>
