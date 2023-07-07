let block = document.querySelector('.block')
let bullet = document.querySelector('.bullet')
let empty = document.querySelectorAll('.empty')
let enemies = document.querySelectorAll('.enemies')
let enemiesCount = document.querySelector('.count')
let row = document.querySelector('.row')
pause = document.querySelector('.pauseButton')

let enemiesKillCount = parseInt(enemiesCount.innerHTML)

let x = parseInt(block.getAttribute('data-x'))
let y = parseInt(bullet.getAttribute('data-y'))

    document.addEventListener('keydown', function (e){
        x = parseInt(block.getAttribute('data-x'))
        y = parseInt(bullet.getAttribute('data-y'))

        let rightBorder = row.offsetWidth - block.offsetWidth
        switch (e.key){
            case 'd':
                if(pause.getAttribute('data-pause')==='0'){
                    x += 50
                    if(x>rightBorder){
                        x=rightBorder
                    }
                    block.setAttribute('data-x', x.toString())
                }
                break
            case 'a':
                if(pause.getAttribute('data-pause')==='0'){
                    x-=50
                    if(x<0){
                        x=0
                    }
                    block.setAttribute('data-x', x.toString())
                }

                break
            case 'w':{
                if(pause.getAttribute('data-pause')==='0'){
                    if(bullet.classList == 'bullet'){
                        bullet.style.display = 'block'
                        bullet.setAttribute('data-x', x.toString())
                        bullet.style.left = `${parseInt(block.getAttribute('data-x'))+10}px`
                        bullet.classList.remove('bullet')
                        bullet.classList.add('fire')
                        shot()
                    }

                }
                break
            }
        }
        block.style.left = `${parseInt(block.getAttribute('data-x'))}px`
    })

    function shot(){
        let shotInterval = setInterval(()=>{
                y+=50
                bullet.setAttribute('data-y', y.toString())
                bullet.style.top = `${-(50+parseInt(bullet.getAttribute('data-y')))}px`
                if(y>=500){
                    y=0
                    bullet.setAttribute('data-y', y.toString())
                    bullet.style.top = `0`
                    bullet.style.display = 'none'

                    clearInterval(shotInterval)

                    bullet.classList.remove('fire')
                    bullet.classList.add('bullet')
                }

                killEnemies(shotInterval)
            },
            100
        )
    }

    function killEnemies(shotInterval){
        enemies.forEach((item)=>{
            let enemiesY = parseInt(item.getAttribute('data-y'))
            let enemiesX = parseInt(item.getAttribute('data-x'))
            let bulletX = parseInt(bullet.getAttribute('data-x'))

            if((y===enemiesY) && (bulletX===enemiesX)){
                y=0
                bullet.setAttribute('data-y', y.toString())
                bullet.style.top = `0`
                bullet.style.display = 'none'

                item.classList.remove('enemies')
                item.removeAttribute('data-y')
                item.removeAttribute('data-x')
                item.classList.add('empty')
                item.setAttribute('data-y', enemiesY.toString())
                item.setAttribute('data-x', enemiesX.toString())

                enemies = document.querySelectorAll('.enemies')
                empty = document.querySelectorAll('.empty')

                enemiesKillCount++
                enemiesCount.innerHTML = enemiesKillCount.toString()

                clearInterval(shotInterval)

                bullet.classList.remove('fire')
                bullet.classList.add('bullet')
            }
        })


}



