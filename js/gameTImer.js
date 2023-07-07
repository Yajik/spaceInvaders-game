let time = document.querySelector('.timer')
pause = document.querySelector('.pauseButton')
let timeOut = parseInt(time.innerHTML)

gameTimer = setInterval(() => {
        if(pause.getAttribute('data-pause')==='0'){
            gameTimerFunc()
        }
    }, 1000
)
function gameTimerFunc(){
    timeOut--

    time.innerHTML = timeOut.toString();

    if(timeOut <= 0){
        setTimeout(()=>{
            redirect(nickname.innerHTML, enemiesCount.innerHTML)
        }, 500)
    }
}




