const play = document.querySelector('.play')
const video = document.querySelector('.video')


video.addEventListener('click', () => {
    if(video.paused){
        play.style.opacity = 0
        video.play()
    }else if(video.play){
        play.style.opacity = 1
        video.pause()
        
        
    }
})

play.addEventListener('click', () => {
    if(video.paused){
        play.style.opacity = 0
        video.play()
    }else if(video.play){
        play.style.opacity = 1
        video.pause()
        
        
    }
})

const mute = document.querySelector('.mute')
const img = document.querySelector('.img_mute')

mute.addEventListener('click', () => {
    if(video.muted){
        video.muted = false
        img.src = './img/icon_audio.png'
    }else{
        video.muted = true
        img.src = './img/icon_mute.png'
    }
})