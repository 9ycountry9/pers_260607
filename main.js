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
        const searchIconElement = document.querySelector('i[data-lucide="search"]');
        if (searchIconElement) {
            lucide.replace(searchIconElement, {
                width: 24,
                height: 24,
                strokeWidth: 1.5
            });
        }

        const bookmarkIconElement = document.querySelector('i[data-lucide="bookmark"]');
        if (bookmarkIconElement) {
            lucide.replace(bookmarkIconElement, {
                width: 24,
                height: 24,
                strokeWidth: 1.5
            });
        }

        const userIconElement = document.querySelector('i[data-lucide="user"]');
        if (userIconElement) {
            lucide.replace(userIconElement, {
                width: 24,
                height: 24,
                strokeWidth: 1.5
            });
        }
    } else {
        console.warn("Lucide icons library not loaded. Icon replacements will not occur.");
    }

    // --- Interactive Fashion Category Functionality ---
    const fashionCategory = document.querySelector('.fashion-category-interactive');
    const fashionTitle = document.querySelector('.fashion-title');
    const fashionSubcategories = document.querySelector('.fashion-subcategories');

    if (fashionTitle && fashionSubcategories && fashionCategory) {
        fashionTitle.addEventListener('click', () => {
            fashionCategory.classList.toggle('open');
        });

        // Close subcategories if clicking outside of them
        document.addEventListener('click', (event) => {
            if (!fashionCategory.contains(event.target)) {
                fashionCategory.classList.remove('open');
            }
        });
    }

    // --- Interactive Perfume Category Functionality ---
    const perfumeCategory = document.querySelector('.perfume-category-interactive');
    const perfumeTitle = document.querySelector('.perfume-title');
    const perfumeSubcategories = document.querySelector('.perfume-subcategories');

    if (perfumeTitle && perfumeSubcategories && perfumeCategory) {
        perfumeTitle.addEventListener('click', () => {
            perfumeCategory.classList.toggle('open');
        });

        // Close subcategories if clicking outside of them
        document.addEventListener('click', (event) => {
            if (!perfumeCategory.contains(event.target)) {
                perfumeCategory.classList.remove('open');
            }
        });
    }
});

// --- Firebase Initialization (Example) ---
// (Kept commented out as per previous response)
;