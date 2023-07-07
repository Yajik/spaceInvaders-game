let next = document.querySelector('.next')
let gameOverScreen = document.querySelector('.gameOver')
let leaderBoardScreen = document.querySelector('.leaderBoard')


next.addEventListener('click', ()=>{
    gameOverScreen.style.display = 'none'
    leaderBoardScreen.style.display = 'flex'
})