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
    { selector: ".storyVideo19", nextPage: "../index.html" }
];

videoSelectors.forEach(videoObj => {
    let video = document.querySelector(videoObj.selector);
    addEndedEventListener(video, videoObj.nextPage);
});
