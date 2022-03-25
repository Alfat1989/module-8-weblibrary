import throttle from "lodash.throttle";
import {timeValue} from "./functions"


const iframe = document.querySelector('iframe')
console.log(iframe)

const player = new Vimeo.Player(iframe);
console.log(player)

const PLATER_TIME='videoplayer-current-time'

player.on('timeupdate', throttle(timeValue, 1000))
    

const getValue = localStorage.getItem(PLATER_TIME)
const getValuePars = JSON.parse(getValue);
// console.log(getValuePars)
    
player.setCurrentTime(getValuePars.seconds)

////////////////////////////////////////////////

// const form = document.querySelector('form')
// const emailInput=document.querySelector('input')
// const textarea = document.querySelector('textarea')


// form.addEventListener('submit', onFormSubmit)
// form.addEventListener('input', throttle(onFormInput, 1000))


// function onFormInput(e) {
  
//     localStorage.setItem(e.target.name, e.target.value)

// }

// function populateText() {
//     const savedEmail = localStorage.getItem('email')
//     const savedMes = localStorage.getItem('message')
//     if (savedEmail||savedMes) {
//         form.elements.email.value=savedEmail
//         form.elements.message.value=savedMes
//     }
    
// }

// populateText()

// function onFormSubmit(e) {
//     e.preventDefault()
//     e.currentTarget.reset()
//     console.log('Pushed')
//     localStorage.removeItem('email')
//     localStorage.removeItem('message')
    
// }

