// Logic for Carousal Slider
let slideIndex = 1;
showSlides(slideIndex);

// Auto slide every 3 sec
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);

// Dot navigation
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Logic for Password toggle
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";

        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");
    } else {
        password.type = "password";
        
        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");
    }
})
