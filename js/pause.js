let pause = document.querySelector('.pauseButton')
let pauseButton = document.querySelector('.pauseImg')
let pauseScreen = document.querySelector('.pause')
let pauseCount = document.querySelector('.pauseCount')

let pauseClickCount = 1;

document.addEventListener('keydown', function (e){
    if(e.keyCode === 32){
        if(pauseClickCount === 1){
            stop()
            pauseClickCount = 2
        }
        else {
            play()
            pauseClickCount = 1
        }
    }
})

pause.addEventListener('click', ()=>{
    if(pauseClickCount === 1){
        stop()
        pauseClickCount = 2
    }
    else {
        play()
        pauseClickCount = 1
    }
})

pauseButton.addEventListener('click', ()=>{
    play()
    pauseClickCount = 1
})

function stop(){
    pauseScreen.style.display = 'flex'
    pauseButton.style.display = 'block'
    pause.style.backgroundImage = "url('../assets/img/play.png')"

    empty.forEach((item)=>{
        item.classList.remove('empty')
        item.classList.add('stopEmpty')
    })

    pause.setAttribute('data-pause', '1')
}

function play(){
    pauseButton.style.display = 'none'
    pauseCount.style.display = 'block'
    pause.style.backgroundImage = "url('../assets/img/pause.png')"
    let pauseCountDown = parseInt(pauseCount.innerHTML)

    let pauseInterval = setInterval(()=>{
            pauseCountDown--
            pauseCount.innerHTML = pauseCountDown.toString()

            if(pauseCountDown===0){
                pauseCount.innerHTML = '3'
                pauseCount.style.display = 'none'
                pauseScreen.style.display = 'none'

                empty.forEach((item)=>{
                    item.classList.remove('stopEmpty')
                    item.classList.add('empty')
                })

                pause.setAttribute('data-pause', '0')
                clearInterval(pauseInterval)
            }
        },
        1000
    )
}