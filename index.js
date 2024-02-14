const subahanAllahDisplay = document.getElementById('subahanAllahDisplay')
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn')
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn')

const allhamdullahDisplay = document.getElementById('allhamdullahDisplay')
const allhamdullahIncrimentBtn = document.getElementById('allhamdullahIncrimentBtn')
const allhamdullahDecrimentBtn = document.getElementById('allhamdullahDecrimentBtn')

const AllhuakbarDisplay= document.getElementById('AllhuakbarDisplay')
const allhuakbarIncrimentBtn = document.getElementById('allhuakbarIncrimentBtn')
const allhuakbarDecrimentBtn = document.getElementById('allhuakbarDecrimentBtn')

const resetBtn= document.getElementById('resetBtn')


let subahanAllahInitialValue=0;
let allhamdullahInitialValue=0;
let allhuakbarInitialValue=0


// first card function
subhanAllahIncrimentBtn.addEventListener('click',function(){

    if(subahanAllahInitialValue===33){
        return alert('subahan allah is commplete,please fill the next one ')
    }
    subahanAllahInitialValue += 1
  
    subahanAllahDisplay.innerText = subahanAllahInitialValue
})
subhanAllahDecrimentBtn.addEventListener('click',function(){
    if(subahanAllahInitialValue === 0){
        return alert('you cant added a negative value')
    }
    subahanAllahInitialValue -= 1
    subahanAllahDisplay.innerText = subahanAllahInitialValue
 })


// sccond function card

allhamdullahIncrimentBtn .addEventListener('click',function(){

    if(allhamdullahInitialValue===33){
        return alert('subahan allah is commplete,please fill the next one ')
    }
    allhamdullahInitialValue += 1
  
    allhamdullahDisplay.innerText = allhamdullahInitialValue
})
allhamdullahDecrimentBtn.addEventListener('click',function(){
    if(allhamdullahInitialValue === 0){
        return alert('you cant added a negative value')
    }
    allhamdullahInitialValue -= 1
    allhamdullahDisplay.innerText = allhamdullahInitialValue 
 })


// thirdd card function card

allhuakbarIncrimentBtn  .addEventListener('click',function(){

    if(allhamdullahInitialValue===33){
        return alert('subahan allah is commplete,please fill the next one ')
    }
    allhuakbarInitialValue += 1
  
    AllhuakbarDisplay.innerText =  allhuakbarInitialValue
})
allhuakbarDecrimentBtn.addEventListener('click',function(){
    if( allhuakbarInitialValue === 0){
        return alert('you cant added a negative value')
    }
    allhuakbarInitialValue -= 1
    AllhuakbarDisplay.innerText =  allhuakbarInitialValue
 })


// resect function 
resetBtn.addEventListener('click',function(){
    subahanAllahDisplay.innerText= 0
    allhamdullahDisplay.innerText=0
    AllhuakbarDisplay.innerText=0
    subahanAllahInitialValue=0
    allhamdullahInitialValue=0
    allhuakbarInitialValue =0
})
