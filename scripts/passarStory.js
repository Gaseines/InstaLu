
//Passar Story


document.addEventListener('DOMContentLoaded', (event) => {
    let v1 =  document.querySelector(".storyVideo1");
    let v2 =  document.querySelector(".storyVideo2");
    let v3 =  document.querySelector(".storyVideo3");
    let v4 =  document.querySelector(".storyVideo4");
    let v5 =  document.querySelector(".storyVideo5");
    let v6 =  document.querySelector(".storyVideo6");
    let v7 =  document.querySelector(".storyVideo7");
    let v8 =  document.querySelector(".storyVideo8");
    let v9 =  document.querySelector(".storyVideo9");
    let v10 = document.querySelector(".storyVideo10");
    let v11 = document.querySelector(".storyVideo11");
    let v12 = document.querySelector(".storyVideo12");
    let v13 = document.querySelector(".storyVideo13");
    let v14 = document.querySelector(".storyVideo14");
    let v15 = document.querySelector(".storyVideo15");
    let v16 = document.querySelector(".storyVideo16");
    let v17 = document.querySelector(".storyVideo17");
    let v18 = document.querySelector(".storyVideo18");
    let v19 = document.querySelector(".storyVideo19");
    let v20 = document.querySelector(".storyVideo20");
    


    const nexts = document.querySelectorAll('.btnNext')


    nexts.forEach(next => {
        nexts.forEach(next => {
            next.addEventListener('click', () => {
                // Do story 1 para o 2
                if (next.classList.contains('next1')) {
                    v1.classList.remove('aniNextAjuste');
                    v1.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video02.html';
                        v1.classList.remove('aniNext');
                    }, 250);

                    // Do story 2 para o 3
                } else if (next.classList.contains('next2')) {
                    v2.classList.remove('aniNextAjuste');
                    v2.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video03.html';
                        v2.classList.remove('aniNext');
                    }, 250);

                    // Do story 3 para o 4
                } else if (next.classList.contains('next3')) {
                    v3.classList.remove('aniNextAjuste');
                    v3.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video04.html';
                        v3.classList.remove('aniNext');
                    }, 250);

                    // Do story 4 para o 5
                } else if (next.classList.contains('next4')) {
                    v4.classList.remove('aniNextAjuste');
                    v4.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video05.html';
                        v4.classList.remove('aniNext');
                    }, 250);

                    // Do story 5 para o 6
                } else if (next.classList.contains('next5')) {
                    v5.classList.remove('aniNextAjuste');
                    v5.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video06.html';
                        v5.classList.remove('aniNext');
                    }, 250);

                    // Do story 6 para o 7
                } else if (next.classList.contains('next6')) {
                    v6.classList.remove('aniNextAjuste');
                    v6.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video07.html';
                        v6.classList.remove('aniNext');
                    }, 250);

                    // Do story 7 para o 8
                } else if (next.classList.contains('next7')) {
                    v7.classList.remove('aniNextAjuste');
                    v7.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video08.html';
                        v7.classList.remove('aniNext');
                    }, 250);

                    // Do story 8 para o 9
                } else if (next.classList.contains('next8')) {
                    v8.classList.remove('aniNextAjuste');
                    v8.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video09.html';
                        v8.classList.remove('aniNext');
                    }, 250);

                    // Do story 9 para o 10
                } else if (next.classList.contains('next9')) {
                    v9.classList.remove('aniNextAjuste');
                    v9.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video10.html';
                        v9.classList.remove('aniNext');
                    }, 250);

                    // Do story 10 para o 11
                } else if (next.classList.contains('next10')) {
                    v10.classList.remove('aniNextAjuste');
                    v10.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video11.html';
                        v10.classList.remove('aniNext');
                    }, 250);

                    // Do story 11 para o 12
                } else if (next.classList.contains('next11')) {
                    v11.classList.remove('aniNextAjuste');
                    v11.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video12.html';
                        v11.classList.remove('aniNext');
                    }, 250);

                    // Do story 12 para o 13
                } else if (next.classList.contains('next12')) {
                    v12.classList.remove('aniNextAjuste');
                    v12.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video13.html';
                        v12.classList.remove('aniNext');
                    }, 250);

                    // Do story 13 para o 14
                } else if (next.classList.contains('next13')) {
                    v13.classList.remove('aniNextAjuste');
                    v13.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video14.html';
                        v13.classList.remove('aniNext');
                    }, 250);

                    // Do story 14 para o 15
                } else if (next.classList.contains('next14')) {
                    v14.classList.remove('aniNextAjuste');
                    v14.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video15.html';
                        v14.classList.remove('aniNext');
                    }, 250);

                    // Do story 15 para o 16
                } else if (next.classList.contains('next15')) {
                    v15.classList.remove('aniNextAjuste');
                    v15.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video16.html';
                        v15.classList.remove('aniNext');
                    }, 250);

                    // Do story 16 para o 17
                } else if (next.classList.contains('next16')) {
                    v16.classList.remove('aniNextAjuste');
                    v16.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video17.html';
                        v16.classList.remove('aniNext');
                    }, 250);

                    // Do story 17 para o 18
                } else if (next.classList.contains('next17')) {
                    v17.classList.remove('aniNextAjuste');
                    v17.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video18.html';
                        v17.classList.remove('aniNext');
                    }, 250);

                    // Do story 18 para o 19
                } else if (next.classList.contains('next18')) {
                    v18.classList.remove('aniNextAjuste');
                    v18.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video19.html';
                        v18.classList.remove('aniNext');
                    }, 250);

                    // Do story 19 para o 20
                } else if (next.classList.contains('next19')) {
                    v19.classList.remove('aniNextAjuste');
                    v19.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../pages/video20.html';
                        v19.classList.remove('aniNext');
                    }, 250);

                    //Do story 20 para Home
                } else if (next.classList.contains('next20')) {
                    v20.classList.remove('aniNextAjuste');
                    v20.classList.add('aniNext');

                    setTimeout(() => {
                        window.location.href = '../index.html';
                        v19.classList.remove('aniNext');
                    }, 250);
                }
            });
        });

    })



})





//Voltar Story


document.addEventListener('DOMContentLoaded', (event) => {
    let v1 =  document.querySelector(".storyVideo1");
    let v2 =  document.querySelector(".storyVideo2");
    let v3 =  document.querySelector(".storyVideo3");
    let v4 =  document.querySelector(".storyVideo4");
    let v5 =  document.querySelector(".storyVideo5");
    let v6 =  document.querySelector(".storyVideo6");
    let v7 =  document.querySelector(".storyVideo7");
    let v8 =  document.querySelector(".storyVideo8");
    let v9 =  document.querySelector(".storyVideo9");
    let v10 = document.querySelector(".storyVideo10");
    let v11 = document.querySelector(".storyVideo11");
    let v12 = document.querySelector(".storyVideo12");
    let v13 = document.querySelector(".storyVideo13");
    let v14 = document.querySelector(".storyVideo14");
    let v15 = document.querySelector(".storyVideo15");
    let v16 = document.querySelector(".storyVideo16");
    let v17 = document.querySelector(".storyVideo17");
    let v18 = document.querySelector(".storyVideo18");
    let v19 = document.querySelector(".storyVideo19");
    let v20 = document.querySelector(".storyVideo20");



    const backs = document.querySelectorAll('.btnBack')


    backs.forEach(back => {
        back.addEventListener('click', () => {
            // Do story 2 para o 1
            if (back.classList.contains('back2')) {
                v2.classList.remove('aniNextAjuste');
                v2.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video01.html';
                    v2.classList.remove('aniNext');
                }, 250);

                // Do story 3 para o 2
            } else if (back.classList.contains('back3')) {
                v3.classList.remove('aniNextAjuste');
                v3.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video02.html';
                    v3.classList.remove('aniNext');
                }, 250);

                // Do story 4 para o 3
            } else if (back.classList.contains('back4')) {
                v4.classList.remove('aniNextAjuste');
                v4.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video03.html';
                    v4.classList.remove('aniNext');
                }, 250);

                // Do story 5 para o 4
            } else if (back.classList.contains('back5')) {
                v5.classList.remove('aniNextAjuste');
                v5.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video04.html';
                    v5.classList.remove('aniNext');
                }, 250);

                // Do story 6 para o 5
            } else if (back.classList.contains('back6')) {
                v6.classList.remove('aniNextAjuste');
                v6.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video05.html';
                    v6.classList.remove('aniNext');
                }, 250);

                // Do story 7 para o 6
            } else if (back.classList.contains('back7')) {
                v7.classList.remove('aniNextAjuste');
                v7.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video06.html';
                    v7.classList.remove('aniNext');
                }, 250);

                // Do story 8 para o 7
            } else if (back.classList.contains('back8')) {
                v8.classList.remove('aniNextAjuste');
                v8.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video07.html';
                    v8.classList.remove('aniNext');
                }, 250);

                // Do story 9 para o 8
            } else if (back.classList.contains('back9')) {
                v9.classList.remove('aniNextAjuste');
                v9.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video08.html';
                    v9.classList.remove('aniNext');
                }, 250);

                // Do story 10 para o 9
            } else if (back.classList.contains('back10')) {
                v10.classList.remove('aniNextAjuste');
                v10.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video09.html';
                    v10.classList.remove('aniNext');
                }, 250);

                // Do story 11 para o 10
            } else if (back.classList.contains('back11')) {
                v11.classList.remove('aniNextAjuste');
                v11.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video10.html';
                    v11.classList.remove('aniNext');
                }, 250);

                // Do story 12 para o 11
            } else if (back.classList.contains('back12')) {
                v12.classList.remove('aniNextAjuste');
                v12.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video11.html';
                    v12.classList.remove('aniNext');
                }, 250);

                // Do story 13 para o 12
            } else if (back.classList.contains('back13')) {
                v13.classList.remove('aniNextAjuste');
                v13.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video12.html';
                    v13.classList.remove('aniNext');
                }, 250);

                // Do story 14 para o 13
            } else if (back.classList.contains('back14')) {
                v14.classList.remove('aniNextAjuste');
                v14.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video13.html';
                    v14.classList.remove('aniNext');
                }, 250);

                // Do story 15 para o 14
            } else if (back.classList.contains('back15')) {
                v15.classList.remove('aniNextAjuste');
                v15.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video14.html';
                    v15.classList.remove('aniNext');
                }, 250);

                // Do story 16 para o 15
            } else if (back.classList.contains('back16')) {
                v16.classList.remove('aniNextAjuste');
                v16.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video15.html';
                    v16.classList.remove('aniNext');
                }, 250);

                // Do story 17 para o 16
            } else if (back.classList.contains('back17')) {
                v17.classList.remove('aniNextAjuste');
                v17.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video16.html';
                    v17.classList.remove('aniNext');
                }, 250);

                // Do story 18 para o 17
            } else if (back.classList.contains('back18')) {
                v18.classList.remove('aniNextAjuste');
                v18.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video17.html';
                    v18.classList.remove('aniNext');
                }, 250);

                // Do story 19 para o 18
            } else if (back.classList.contains('back19')) {
                v19.classList.remove('aniNextAjuste');
                v19.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video18.html';
                    v19.classList.remove('aniNext');
                }, 250);

                // Do story 20 para o 19
            } else if (back.classList.contains('back20')) {
                v20.classList.remove('aniNextAjuste');
                v20.classList.add('aniNext');

                setTimeout(() => {
                    window.location.href = '../pages/video19.html';
                    v20.classList.remove('aniNext');
                }, 250);
            }
        });
    });


})

//Home
document.addEventListener('DOMContentLoaded', (event) => {
    const homes = document.querySelectorAll('.home')
    const videos = document.querySelectorAll('.container_video_story')

    homes.forEach(home => {
        home.addEventListener('click', () => {
            window.location.href = '../index.html'
        })
    })

})


//Passar e Voltar Story deslizando


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#all')

    let touchstartX = 0;
    let touchendX = 0;


    function deslizeProximo() {
        //Passando  
        if (touchendX < touchstartX) {
            // Verifica e redireciona para o próximo story
            for (let i = 1; i < 20; i++) {
                if (container.classList.contains(`container_video${i}`)) {
                    container.classList.add('aniNext');
                    setTimeout(() => {
                        window.location.href = `../pages/video${String(i + 1).padStart(2, '0')}.html`;
                    }, 250);
                    break;
                }
            }
        } else if (touchendX > touchstartX) {
            // Verifica e redireciona para o story anterior
            for (let i = 2; i <= 20; i++) {
                if (container.classList.contains(`container_video${i}`)) {
                    container.classList.add('aniNextAjuste');
                    setTimeout(() => {
                        window.location.href = `../pages/video${String(i - 1).padStart(2, '0')}.html`;
                    }, 250);
                    break;
                }
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



