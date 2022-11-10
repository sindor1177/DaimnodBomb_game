const table = document.querySelector('.table')
const arr = []
const modal = document.querySelector('.modal')
const restartBtn = document.querySelector('.restart_btn')
const startBtn = document.querySelector('.start_btn')
const startModal = document.querySelector('.start_modal')
const endModal = document.querySelector('.end_modal')
const timeText = document.querySelector('.time_text')
const scoreBlueText = document.querySelectorAll('.score_text-blue')
const scoreRedText = document.querySelectorAll('.score_text-red')


while(arr.length !== 10){
    let random = Math.floor(Math.random() * 100)
    if(!arr.includes(random)){
        arr.push(random)
    }
}

// console.log(arr);

for (let i = 1; i <= 10; i++){
    const tr =document.createElement('tr')
    for(let j = 1; j <= 10; j++){
        const td =document.createElement('td')
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

const allItems = document.querySelectorAll('td')

for(let i = 0; i < allItems.length; i++){
    allItems[i].addEventListener('click', function(){
        if(arr.includes(i)){
            allItems[i].classList.add('blue')
        }else{
            allItems[i].classList.add('red')
        }

        let  blueCount = document.querySelectorAll('.blue').length
        let  redCount = document.querySelectorAll('.red').length
        scoreBlueText.forEach(item => item.textContent = blueCount)
        scoreRedText.forEach(item => item.textContent = redCount)
        if (blueCount === 10){
            endModal.querySelector('.modal_title').textContent = 'WINNER 🥳'
            endModal.classList.add('modal_open')
        }
    })
}

function timeStart() {
    let time = 30;

    setInterval(function(){
        if(time > 0) {
            time = time - 1
            timeText.textContent = `in 00:${time < 10 ? '0'+time + '  seconds' : time + '  seconds'}`
        }
    }, 1000)

    setInterval( function() {
        modal.classList.add('modal_open')
    }, 1000 * 30)
}

restartBtn.addEventListener('click', function(){
    window.location.reload()
})

startBtn.addEventListener('click', function(){
    timeStart()
    startModal.classList.remove('modal_open')
})

 