// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link =>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: "smooth"
    });
  });
});
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.volume = 0.4;
    bgMusic.play();
    musicToggle.classList.add("playing");
  } else {
    bgMusic.pause();
    musicToggle.classList.remove("playing");
  }
  isPlaying = !isPlaying;
});
