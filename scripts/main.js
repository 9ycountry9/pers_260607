
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if(slides.length > 0) {
      slides[slideIndex-1].style.display = "block";
    }
    setTimeout(showSlides, 5000); // 5초마다 이미지 변경
}

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function (event) {
            event.preventDefault();
            const isVisible = dropdownContent.style.display === 'block';
            // Close all dropdowns
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
            // Open the clicked dropdown if it was not visible
            if (!isVisible) {
                dropdownContent.style.display = 'block';
            }
        });
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn')) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
        }
    });
});
