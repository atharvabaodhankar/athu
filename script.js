// Starting Script




// AboutMe Video Auto-Play

let aboutmevideo = document.querySelector('.aboutme-video');

function videoPlayer() {
    aboutmevideo.classList.add('active');
}
setTimeout(videoPlayer, 3000)

// AboutMe Video Auto-Play-End





// NavBar Script

let navBar = document.querySelector("nav");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active');
})

// NavBar Script-End







// NavBar Scroll Script

window.addEventListener("scroll", () => {
    if (scrollY > 300) {
        navBar.classList.add('activenavbar');
    } else {
        navBar.classList.remove('activenavbar');
    }
})

// NavBar Scroll Script-End



// btn-NavBar

document.querySelectorAll(".btn").addEventListener('click', () => {
    alert('hellow')
    navBar.classList.remove('active');
})
// btn-NavBar-End




