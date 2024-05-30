
//Passar Story
document.addEventListener('DOMContentLoaded', (event) =>{
    let v1 = document.querySelector(".storyVideo1")
    let v2 = document.querySelector(".storyVideo2")

    const nexts = document.querySelectorAll('.btnNext')

    nexts.forEach(next => {
        next.addEventListener('click', () => {
            if(next.classList.contains('next1')){
                v1.classList.remove('aniNextAjuste')
                v1.classList.add('aniNext')
                
                setTimeout(() => {
                    window.location.href = '../pages/video02.html'
                    v1.classList.remove('aniNext')
                    
                }, 250)

                
            }else{
                alert('deu errado')
            }
        })
    })

})

//Voltar Story
document.addEventListener('DOMContentLoaded', (event) =>{
    let v1 = document.querySelector(".storyVideo1")
    let v2 = document.querySelector(".storyVideo2")

    const backs = document.querySelectorAll('.btnBack')

    backs.forEach(back => {
        back.addEventListener('click', () => {
            if(back.classList.contains('back2')){
                v2.classList.remove('aniNextAjuste')
                v2.classList.add('aniNext')
                
                setTimeout(() => {
                    window.location.href = '../pages/video01.html'
                    v1.classList.remove('aniNext')
                    
                }, 250)

                
            }else{
                alert('deu errado')
            }
        })
    })

})

//Home
document.addEventListener('DOMContentLoaded', (event) =>{
     const homes = document.querySelectorAll('.home')

     homes.forEach(home => {
        home.addEventListener('click', () => {
            window.location.href = '../index.html'
         })
     })
})
