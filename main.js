// Main JavaScript File (main.js)

// --- Web Component: SimpleGreeting ---
class SimpleGreeting extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                padding: 10px 15px;
                border: 1px solid #ccc;
                border-radius: 5px;
                display: inline-block;
                background-color: #f9f9f9;
            }
            p {
                margin: 0;
                color: #333;
            }
        `;

        const text = document.createElement('p');
        text.textContent = `Hello, ${this.getAttribute('name') || 'World'}!`;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(text);
    }
}
customElements.define('simple-greeting', SimpleGreeting);

// --- Slideshow Functionality ---
document.addEventListener('DOMContentLoaded', () => {
    const slideshowImages = document.querySelectorAll('.slideshow-image');
    let currentSlide = 0;

    if (slideshowImages.length > 0) {
        slideshowImages[currentSlide].classList.add('active');

        setInterval(() => {
            slideshowImages[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slideshowImages.length;
            slideshowImages[currentSlide].classList.add('active');
        }, 5000); // Change slide every 5 seconds
    }

    // --- Initialize Lucide Icons for Perfume Guide Page ---
    if (typeof lucide !== 'undefined') {
        // Replace icons if they exist in the DOM
        lucide.replace('[data-lucide="search"]', { padding: true, width: 24, height: 24 });
        lucide.replace('[data-lucide="bookmark"]', { padding: true, width: 24, height: 24 });
        lucide.replace('[data-lucide="user"]', { padding: true, width: 24, height: 24 });
    } else {
        console.warn("Lucide icons library not loaded. Icon replacements will not occur.");
    }

    // --- Interactive Category Functionality ---
    const interactiveSections = [
        { sectionClass: '.fashion-category-interactive', titleClass: '.fashion-title', subcategoriesClass: '.fashion-subcategories' },
        { sectionClass: '.perfume-category-interactive', titleClass: '.perfume-title', subcategoriesClass: '.perfume-subcategories' }
    ];

    interactiveSections.forEach(({ sectionClass, titleClass, subcategoriesClass }) => {
        const section = document.querySelector(sectionClass);
        const title = section ? section.querySelector(titleClass) : null;
        const subcategories = section ? section.querySelector(subcategoriesClass) : null;

        if (title && subcategories && section) {
            title.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent event from bubbling up to document click listener
                section.classList.toggle('open');
            });

            // Close subcategories if clicking outside of the section
            document.addEventListener('click', (event) => {
                if (section && !section.contains(event.target)) {
                    section.classList.remove('open');
                }
            });
        }
    });
});

// --- Firebase Initialization (Example) ---
// (Kept commented out as per previous response)
;