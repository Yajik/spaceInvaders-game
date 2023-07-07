pause = document.querySelector('.pauseButton')
timeOutMenu = document.querySelector('.gameOverField')

function enemiesSpawner(){

    let max = empty.length-1;
    let r = Math.floor(Math.random() * (max))

    let enemiesX = parseInt(empty[r].getAttribute('data-x'))
    let enemiesY = parseInt(empty[r].getAttribute('data-Y'))

    let newEnemeies = empty[r]

    newEnemeies.classList.remove('empty')
    newEnemeies.classList.add('enemies')

    newEnemeies.setAttribute('data-x', enemiesX.toString())
    newEnemeies.setAttribute('data-y', enemiesY.toString())

    enemies = document.querySelectorAll('.enemies')
    empty = document.querySelectorAll('.empty')
}

let enemiesSpawnTimer = setInterval(()=>{

    if(pause.getAttribute('data-pause')==='0'){
        enemiesSpawner()
    }
    },
    1500
)