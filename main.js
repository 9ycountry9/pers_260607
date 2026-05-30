document.addEventListener("DOMContentLoaded", function() {
    lucide.createIcons();
    // --- 향수 가이드 페이지 스크립트 ---
    const sections = document.querySelectorAll(".guide-content section");
    const navLinks = document.querySelectorAll(".sub-nav a");

    if (sections.length > 0 && navLinks.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").substring(1) === entry.target.id) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            observer.observe(section);
        });

        navLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    }

    // --- 메인 페이지 슬라이드쇼 스크립트 ---
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        const images = slideshowContainer.querySelectorAll('.slideshow-image');
        let currentImageIndex = 0;

        setInterval(() => {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }, 5000); // 5초마다 변경
    }
});
