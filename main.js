const homeBtn1 = document.querySelector('.home-btn1')
const homeBtn2 =document.querySelector('.home-btn2')
const homeBtn3 =document.querySelector('.home-btn3')
const guestBtn1 =document.querySelector('.guest-btn1')
const guestBtn2 =document.querySelector('.guest-btn2')
const guestBtn3 =document.querySelector('.guest-btn3')

const homeScore = document.querySelector('.home-score')
const guestScore = document.querySelector('.guest-score')


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

homeBtn1.addEventListener('click',function(){
    count++
    leaderCounterH()    
})
homeBtn2.addEventListener('click',function(){
    count +=2
    leaderCounterH()
})
homeBtn3.addEventListener('click',function(){
    count +=3
    leaderCounterH()
})
guestBtn1.addEventListener('click',function(){
    countG++
    leaderCounterG()
})
guestBtn2.addEventListener('click',function(){
    countG +=2
    leaderCounterG()
})
guestBtn3.addEventListener('click',function(){
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