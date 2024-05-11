// video
window.addEventListener("load", function () {
    let video = window.document.querySelector('#video');
    video.play();
    video.loop = true;
});

// < !--Initialize Swiper-- >

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

// login
function logar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if (nome == 'admin' && senha == 'admin') {
        alert('Acertou hehehe');
        location.href = "login.hmtl";
    } else {
        alert('Ta errado');
    }
}

// // filme
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//pop up
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}