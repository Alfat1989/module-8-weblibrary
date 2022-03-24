import throttle from "lodash.throttle";
import {timeValue} from "./functions"


localStorage.setItem('my-data', JSON.stringify({name:"Mango"}))

const iframe = document.querySelector('iframe')
console.log(iframe)

const player = new Vimeo.Player(iframe);
console.log(player)


player.on('timeupdate', throttle(timeValue, 1000)) 
    

const getValue = localStorage.getItem('videoplayer-current-time')
const getValuePars = JSON.parse(getValue);
console.log(getValuePars)
    
player.setCurrentTime(getValuePars.seconds)






