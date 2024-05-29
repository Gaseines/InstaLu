
let v1 = document.querySelector('#v1')

v1.addEventListener('click', () => {
    let black = document.querySelector('#black1')
    

    black.classList.add('black_box_open')

    setTimeout(() =>{
        window.location.href = './pages/video01.html'
    },190)
})

