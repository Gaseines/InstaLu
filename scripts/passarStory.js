
//Passar Story


document.addEventListener('DOMContentLoaded', (event) =>{
    let v1 = document.querySelector(".storyVideo1")
    let v2 = document.querySelector(".storyVideo2")
    let v3 = document.querySelector(".storyVideo3")
    let v4 = document.querySelector(".storyVideo4")

    const nexts = document.querySelectorAll('.btnNext')


    nexts.forEach(next => {
        next.addEventListener('click', () => {
//Do story 1 para o 2
            if(next.classList.contains('next1')){
                v1.classList.remove('aniNextAjuste')
                v1.classList.add('aniNext')
                
                setTimeout(() => {
                    window.location.href = '../pages/video02.html'
                    v1.classList.remove('aniNext')
                    
                }, 250)

//Do story 2 para o 3               
            }else if(next.classList.contains('next2')){
                v2.classList.remove('aniNextAjuste')
                v2.classList.add('aniNext')
            
                setTimeout(() => {
                    window.location.href = '../pages/video03.html'
                    v2.classList.remove('aniNext')
                
                }, 250)

//Do story 3 para o 4             
            }else if(next.classList.contains('next2')){
                v2.classList.remove('aniNextAjuste')
                v2.classList.add('aniNext')
            
                setTimeout(() => {
                    window.location.href = '../pages/video03.html'
                    v2.classList.remove('aniNext')
                
                }, 250)

            
            }
        })
    })



})





//Voltar Story


document.addEventListener('DOMContentLoaded', (event) =>{
    let v2 = document.querySelector(".storyVideo2")
    let v3 = document.querySelector(".storyVideo3")
    let v4 = document.querySelector(".storyVideo4")
    

    const backs = document.querySelectorAll('.btnBack')


    backs.forEach(back => {
        back.addEventListener('click', () => {
//Do story 2 para o 1
            if(back.classList.contains('back2')){
                v2.classList.remove('aniNextAjuste')
                v2.classList.add('aniNext')
                
                setTimeout(() => {
                    window.location.href = '../pages/video01.html'
                    v2.classList.remove('aniNext')
                    
                }, 250)

//Do story 3 para o 2               
            }else if(back.classList.contains('back3')){
                v3.classList.remove('aniNextAjuste')
                v3.classList.add('aniNext')
                
                setTimeout(() => {
                    window.location.href = '../pages/video02.html'
                    v3.classList.remove('aniNext')
                    
                }, 250)

//Do story 4 para o 3                
            }else if(back.classList.contains('back4')){
                v4.classList.remove('aniNextAjuste')
                v4.classList.add('aniNext')
                
                setTimeout(() => {
                    window.location.href = '../pages/video03.html'
                    v4.classList.remove('aniNext')
                    
                }, 250)

                
            }
        })
    })

})

//Home
document.addEventListener('DOMContentLoaded', (event) =>{
     const homes = document.querySelectorAll('.home')
     const videos = document.querySelectorAll('.container_video_story')

//Clicando
     homes.forEach(home => {
        home.addEventListener('click', () => {
            window.location.href = '../index.html'
         })
     })

})


//Passar e Voltar Story deslizando


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#all')
    const v1 = document.querySelector(".container_video1")
    const v2 = document.querySelector(".container_video2")
    const v3 = document.querySelector(".container_video3")
    const v4 = document.querySelector(".container_video4")

    let touchstartX = 0;
    let touchendX = 0;


    function deslizeProximo() { 
//Passando  
if (touchendX < touchstartX) {
    //Do story 1 para o 2 
    if (container.classList.contains('container_video1')) {
        container.classList.add('aniNext');
        setTimeout(() => {
            window.location.href = '../pages/video02.html';
        }, 250);
//Do story 2 para o 3
    } else if (container.classList.contains('container_video2')) {
        container.classList.add('aniNext');
        setTimeout(() => {
            window.location.href = '../pages/video03.html';
        }, 250);
//Do story 3 para o 4 
    } else if (container.classList.contains('container_video3')) {
        container.classList.add('aniNext');
        setTimeout(() => {
            window.location.href = '../pages/video04.html';
        }, 250);
    }

//Voltando
} else if (touchendX > touchstartX) {
//Do story 2 para o 1 
    if (container.classList.contains('container_video2')) {
        container.classList.add('aniNextAjuste');
        setTimeout(() => {
            window.location.href = '../pages/video01.html';
        }, 250);
//Do story 3 para o 2 
    } else if (container.classList.contains('container_video3')) {
        container.classList.add('aniNextAjuste');
        setTimeout(() => {
            window.location.href = '../pages/video02.html';
        }, 250);
//Do story 4 para o 3 
    } else if (container.classList.contains('container_video4')) {
        container.classList.add('aniNextAjuste');
        setTimeout(() => {
            window.location.href = '../pages/video03.html';
        }, 250);
    }
}
}


//Eventos Passar

    container.addEventListener('touchstart', (event) => {
        touchstartX = event.changedTouches[0].screenX;
    });

    container.addEventListener('touchend', (event) => {
        touchendX = event.changedTouches[0].screenX;
        deslizeProximo();
    })

    

})



