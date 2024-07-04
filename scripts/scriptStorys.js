
//Passa sozinho os Story
function addEndedEventListener(video, nextPage) {
    if (video) {
        video.addEventListener('ended', () => {
            video.classList.remove('aniNextAjuste');
            video.classList.add('aniNext');

            setTimeout(() => {
                window.location.href = nextPage;
                video.classList.remove('aniNext');
            }, 250);
        });
    }
}

let videoSelectors = [
    { selector: ".storyVideo1", nextPage: "../pages/video02.html" },
    { selector: ".storyVideo2", nextPage: "../pages/video03.html" },
    { selector: ".storyVideo3", nextPage: "../pages/video04.html" },
    { selector: ".storyVideo4", nextPage: "../pages/video05.html" },
    { selector: ".storyVideo5", nextPage: "../pages/video06.html" },
    { selector: ".storyVideo6", nextPage: "../pages/video07.html" },
    { selector: ".storyVideo7", nextPage: "../pages/video08.html" },
    { selector: ".storyVideo8", nextPage: "../pages/video09.html" },
    { selector: ".storyVideo9", nextPage: "../pages/video10.html" },
    { selector: ".storyVideo10", nextPage: "../pages/video11.html" },
    { selector: ".storyVideo11", nextPage: "../pages/video12.html" },
    { selector: ".storyVideo12", nextPage: "../pages/video13.html" },
    { selector: ".storyVideo13", nextPage: "../pages/video14.html" },
    { selector: ".storyVideo14", nextPage: "../pages/video15.html" },
    { selector: ".storyVideo15", nextPage: "../pages/video16.html" },
    { selector: ".storyVideo16", nextPage: "../pages/video17.html" },
    { selector: ".storyVideo17", nextPage: "../pages/video18.html" },
    { selector: ".storyVideo18", nextPage: "../pages/video19.html" },
    { selector: ".storyVideo19", nextPage: "../pages/video20.html" },
    { selector: ".storyVideo20", nextPage: "../index.html" }
];

videoSelectors.forEach(videoObj => {
    let video = document.querySelector(videoObj.selector);
    addEndedEventListener(video, videoObj.nextPage);
});


//Barrinha de Load de cada Vídeo

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 01
    const barrinha1 = document.querySelector('#loadC1');
    const video1 = document.querySelector('.storyVideo1');

    video1.addEventListener('play', () => {
        barrinha1.classList.add('loadC1');

        if (video1.ended) {
            barrinha1.classList.add('loadC1');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 02
    const barrinha2 = document.querySelector('#loadC2');
    const video2 = document.querySelector('.storyVideo2');

    video2.addEventListener('play', () => {
        barrinha2.classList.add('loadC2');

        if (video2.ended) {
            barrinha2.classList.add('loadC2');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 03
    const barrinha3 = document.querySelector('#loadC3');
    const video3 = document.querySelector('.storyVideo3');

    video3.addEventListener('play', () => {
        barrinha3.classList.add('loadC3');

        if (video3.ended) {
            barrinha3.classList.add('loadC3');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 04
    const barrinha4 = document.querySelector('#loadC4');
    const video4 = document.querySelector('.storyVideo4');

    video4.addEventListener('play', () => {
        barrinha4.classList.add('loadC4');

        if (video4.ended) {
            barrinha4.classList.add('loadC4');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 05
    const barrinha5 = document.querySelector('#loadC5');
    const video5 = document.querySelector('.storyVideo5');

    video5.addEventListener('play', () => {
        barrinha5.classList.add('loadC5');

        if (video5.ended) {
            barrinha5.classList.add('loadC5');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 06
    const barrinha6 = document.querySelector('#loadC6');
    const video6 = document.querySelector('.storyVideo6');

    video6.addEventListener('play', () => {
        barrinha6.classList.add('loadC6');

        if (video6.ended) {
            barrinha6.classList.add('loadC6');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 07
    const barrinha7 = document.querySelector('#loadC7');
    const video7 = document.querySelector('.storyVideo7');

    video7.addEventListener('play', () => {
        barrinha7.classList.add('loadC7');

        if (video7.ended) {
            barrinha7.classList.add('loadC7');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 08
    const barrinha8 = document.querySelector('#loadC8');
    const video8 = document.querySelector('.storyVideo8');

    video8.addEventListener('play', () => {
        barrinha8.classList.add('loadC8');

        if (video8.ended) {
            barrinha8.classList.add('loadC8');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 09
    const barrinha9 = document.querySelector('#loadC9');
    const video9 = document.querySelector('.storyVideo9');

    video9.addEventListener('play', () => {
        barrinha9.classList.add('loadC9');

        if (video9.ended) {
            barrinha9.classList.add('loadC9');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 10
    const barrinha10 = document.querySelector('#loadC10');
    const video10 = document.querySelector('.storyVideo10');

    video10.addEventListener('play', () => {
        barrinha10.classList.add('loadC10');

        if (video10.ended) {
            barrinha10.classList.add('loadC10');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 11
    const barrinha11 = document.querySelector('#loadC11');
    const video11 = document.querySelector('.storyVideo11');

    video11.addEventListener('play', () => {
        barrinha11.classList.add('loadC11');

        if (video11.ended) {
            barrinha11.classList.add('loadC11');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 12
    const barrinha12 = document.querySelector('#loadC12');
    const video12 = document.querySelector('.storyVideo12');

    video12.addEventListener('play', () => {
        barrinha12.classList.add('loadC12');

        if (video12.ended) {
            barrinha12.classList.add('loadC12');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 13
    const barrinha13 = document.querySelector('#loadC13');
    const video13 = document.querySelector('.storyVideo13');

    video13.addEventListener('play', () => {
        barrinha13.classList.add('loadC13');

        if (video13.ended) {
            barrinha13.classList.add('loadC13');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 14
    const barrinha14 = document.querySelector('#loadC14');
    const video14 = document.querySelector('.storyVideo14');

    video14.addEventListener('play', () => {
        barrinha14.classList.add('loadC14');

        if (video14.ended) {
            barrinha14.classList.add('loadC14');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 15
    const barrinha15 = document.querySelector('#loadC15');
    const video15 = document.querySelector('.storyVideo15');

    video15.addEventListener('play', () => {
        barrinha15.classList.add('loadC15');

        if (video15.ended) {
            barrinha15.classList.add('loadC15');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 16
    const barrinha16 = document.querySelector('#loadC16');
    const video16 = document.querySelector('.storyVideo16');

    video16.addEventListener('play', () => {
        barrinha16.classList.add('loadC16');

        if (video16.ended) {
            barrinha16.classList.add('loadC16');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 17
    const barrinha17 = document.querySelector('#loadC17');
    const video17 = document.querySelector('.storyVideo17');

    video17.addEventListener('play', () => {
        barrinha17.classList.add('loadC17');

        if (video17.ended) {
            barrinha17.classList.add('loadC17');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 18
    const barrinha18 = document.querySelector('#loadC18');
    const video18 = document.querySelector('.storyVideo18');

    video18.addEventListener('play', () => {
        barrinha18.classList.add('loadC18');

        if (video18.ended) {
            barrinha18.classList.add('loadC18');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 19
    const barrinha19 = document.querySelector('#loadC19');
    const video19 = document.querySelector('.storyVideo19');

    video19.addEventListener('play', () => {
        barrinha19.classList.add('loadC19');

        if (video19.ended) {
            barrinha19.classList.add('loadC19');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Vídeo 20
    const barrinha20 = document.querySelector('#loadC20');
    const video20 = document.querySelector('.storyVideo20');

    video19.addEventListener('play', () => {
        barrinha19.classList.add('loadC20');

        if (video20.ended) {
            barrinha20.classList.add('loadC20');
        }
    });
});


