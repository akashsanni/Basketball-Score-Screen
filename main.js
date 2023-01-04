const onePlusHome =document.querySelector('#one-plus-h')
const twoPlusHome =document.querySelector('#two-plus-h')
const threePlusHome =document.querySelector('#three-plus-h')
const onePlusGuest =document.querySelector('#one-plus-g')
const twoPlusGuest =document.querySelector('#two-plus-g')
const threePlusGuest =document.querySelector('#three-plus-g')

const homeScorePointsText = document.querySelector('.home-points-text')

const homeScore =document.querySelector('.home-score-display')
const guestScore =document.querySelector('.guest-score-display')
let count=0
let leadingCount=0
let countG=0
let leadingCountG=0

function leaderCounterH(){
    if(count < 10){
        leadingCount = "0" + count.toString()
    }else{
        leadingCount = count
    }
    homeScore.innerText = leadingCount
     
}

function leaderCounterG(){
    if(countG < 10){
        leadingCountG = "0" + countG.toString()
    }else{
        leadingCountG = countG
    }
   
    guestScore.innerText = leadingCountG
     
}
// highScorer()

onePlusHome.addEventListener('click',function(){
    count++
    leaderCounterH()    
})
twoPlusHome.addEventListener('click',function(){
    count +=2
    leaderCounterH()
})
threePlusHome.addEventListener('click',function(){
    count +=3
    leaderCounterH()
})
onePlusGuest.addEventListener('click',function(){
    countG++
    leaderCounterG()
})
twoPlusGuest.addEventListener('click',function(){
    countG +=2
    leaderCounterG()
})
threePlusGuest.addEventListener('click',function(){
    countG +=3
    leaderCounterG()
})



const resetBtn = document.querySelector(".reset")

resetBtn.addEventListener('click',function(){
        
        countG = 0
        count =0
        guestScore.innerText = "00"
        homeScore.innerText = "00"
})

// To be added this function
// The leading team name highlights
// function leadingTeamScorer(){
// if(count > countG){
//     document.querySelector('#home').style.color="green" 
// }else{
//     document.querySelector('#guest').style.color="green" 
// }
// }
