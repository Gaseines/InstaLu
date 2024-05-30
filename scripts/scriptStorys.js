let v1 = document.querySelector(".storyVideo1")
let v2 = document.querySelector(".storyVideo2")

v1.addEventListener('ended', () => {
    v1.classList.remove('aniNextAjuste')
                v1.classList.add('aniNext')
                
                setTimeout(() => {
                    window.location.href = '../pages/video02.html'
                    v1.classList.remove('aniNext')
                    
                }, 250)
})