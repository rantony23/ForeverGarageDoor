document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });

    // Open modal on grid item click
    document.querySelectorAll('.contenedor-grid .same').forEach((element, index) => {
        element.addEventListener('click', () => {
            swiper.slideToLoop(index); // Swiper index starts from 0, loop to ensure correct slide
            document.getElementById('swiperModal').style.display = 'flex';
        });
    });

    // Close modal on outside click
    document.getElementById('swiperModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            document.getElementById('swiperModal').style.display = 'none';
        }
    });

    // Close modal on exit button click
    document.getElementById('exitButton').addEventListener('click', () => {
        document.getElementById('swiperModal').style.display = 'none';
    });
});
