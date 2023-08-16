const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".close-icon")
const trailContEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");


btnEl.addEventListener("click",()=>
{
    trailContEl.classList.remove("active");
});

closeEl.addEventListener("click",()=>
{
    trailContEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0
});