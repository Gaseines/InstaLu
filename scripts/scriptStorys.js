let v1 = document.querySelector(".storyVideo1")
let v2 = document.querySelector(".storyVideo2")
let v3 = document.querySelector(".storyVideo3")
let v4 = document.querySelector(".storyVideo4")


//Story acaba passa para o proximo

//Story 1 para o 2
v1.addEventListener('ended', () => {
    v1.classList.remove('aniNextAjuste')
                v1.classList.add('aniNext')
                
                setTimeout(() => {
                    window.location.href = '../pages/video02.html'
                    v1.classList.remove('aniNext')
                    
                }, 250)
})

//Story 2 para o 3
v2.addEventListener('ended', () => {
    v2.classList.remove('aniNextAjuste')
                v2.classList.add('aniNext')
                
                setTimeout(() => {
                    window.location.href = '../pages/video03.html'
                    v2.classList.remove('aniNext')
                    
                }, 250)
})