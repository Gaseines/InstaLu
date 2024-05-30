
let v1 = document.querySelector('#v1')
let v2 = document.querySelector('#v2')



//Abertura Story 01
v1.addEventListener('click', () => {
    let black = document.querySelector('#black1')
    

    black.classList.add('black_box_open')

    setTimeout(() =>{
        window.location.href = './pages/video01.html'
    }, 170)

    setTimeout(() => {
        black.classList.remove('black_box_open')
    }, 800)
})


//Abertura Story 02
v2.addEventListener('click', () => {
    let black = document.querySelector('#black2')
    

    black.classList.add('black_box_open')

    setTimeout(() =>{
        window.location.href = './pages/video02.html'
    }, 170)

    setTimeout(() => {
        black.classList.remove('black_box_open')
    }, 800)
})

