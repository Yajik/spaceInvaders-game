let enemiesBullet = document.querySelector('.enemBullet')
let life = document.querySelectorAll('.life')
let lifeBlock = document.querySelector('.lifeImgBlock')
pause = document.querySelector('.pauseButton')

function enemiesShot(){
    let max = enemies.length-1;
    let r = Math.floor(Math.random() * (max))

    let top = enemies[r].offsetTop
    let left = enemies[r].offsetLeft
    let enemiesY = enemies[r].getAttribute('data-y')


    enemiesBullet.style.display = 'block'
    enemiesBullet.style.top = `${top+10}px`
    enemiesBullet.style.left = `${left+10}px`
    enemiesBullet.setAttribute('data-y', enemiesY)

    let enemiesBulletY = parseInt(enemiesBullet.getAttribute('data-y'))
    let enemiesBulletX = parseInt(enemies[r].getAttribute('data-x'))


    let fireTimer = setInterval(()=>{
            top +=50

            enemiesBullet.style.top = `${top}px`

            enemiesBulletY -=50
            let playerX = parseInt(block.getAttribute('data-x'))
            let playerY = parseInt(block.getAttribute('data-y'))
            if((enemiesBulletY===playerY) && (enemiesBulletX===playerX)) {
                enemiesBullet.style.display = 'none'
                block.style.backgroundImage = "url('../assets/img/explosion.png')"


                lifeCounter()


                clearInterval(fireTimer)
            }

            if(enemiesBulletY<-50){
                enemiesBullet.style.display = 'none'
                clearInterval(fireTimer)
            }


        },
        80
    )

    setTimeout(() => {
            clearInterval(fireTimer)
            block.style.backgroundImage = "url('../assets/img/player.png')"
        }, 1100
    );
}

let enemiesShotTimer = setInterval(()=>{
    if(pause.getAttribute('data-pause')==='0'){
        enemiesShot()
    }

    }, 1600
)

function lifeCounter(){
    let lifeCount = life.length-1
    if(lifeCount===0){
        lifeBlock.style.marginBottom = '30px'
        setTimeout(()=>{
                redirect(nickname.innerHTML, enemiesCount.innerHTML)
        }, 500)
    }
    life[lifeCount].classList.remove('life')
    life[lifeCount].style.display = 'none'
    life = document.querySelectorAll('.life')
}