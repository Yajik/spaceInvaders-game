<?php
if (isset($_GET['name'])) {
    if (strlen($_GET['name']) > 5) {
        $nickLenError = "<div><p class='errorLogin'>Никнейм не больше 5 символов</p></div>";
    } else {
        header("location: pages/game.php?name=$_GET[name]");
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

    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/start.css">

</head>

<body>

<div class="wrapper">
    <div class="game">
        <div class="game__frame">
            <div class="start">
            </div>
            <div class="start-login">
                <div class="logotype">
                    <h1 class="logotypeText" style="color:yellow">SPACE</h1>
                    <h1 class="logotypeText" style="color: red">INVADERS</h1>
                </div>

                <form action="" method="get" class="startScreenForm">
                    <input type="text" name="name" placeholder="Имя игрока" required class="nickNameInput">
                    <?php
                        if (isset($nickLenError)) {
                            echo $nickLenError;
                        }
                    ?>
                    <button class="gameStart">Новая игра</button>
                </form>
            </div>

        </div>
    </div>
</div>


</body>
</html>


<style>

</style>
