let nickname = document.querySelector('.nickname')

function redirect(name, points){
    window.location.href=`../pages/gameOver.php?name=${name}&point=${points}`
}