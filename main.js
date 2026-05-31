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
    // This part will only execute if the perfume-guide.html page is loaded
    // and the icons are present in the DOM.
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
});

// Example of using the Web Component (if needed elsewhere)
// document.body.innerHTML += '<simple-greeting name="Developer"></simple-greeting>';


// --- Firebase Initialization (Example) ---
// If you intend to use Firebase services, you would initialize them here.
// For example, to initialize Cloud Firestore:
/*
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase initialized.");
*/
// Remember to replace YOUR_* values with your actual Firebase project configuration.
// You can get this configuration from your Firebase project settings.
// Make sure you have added a web app to your Firebase project.
// You might also need to install the Firebase SDKs if you are not using CDNs:
// npm install firebase
// And then import modules as needed.
// For this project, we are assuming a framework-less setup, so CDN links in HTML are preferred.
// If you need to add Firebase SDKs via CDN, you would do so in your index.html file.
// Example CDN link for Firebase:
// <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   var db = firebase.firestore();
// </script>
// IMPORTANT: The above CDN initialization is for Firebase v8. For v9 and later, use modular imports.
// Since this is a framework-less project, using CDN links in HTML is the simplest approach.
// Ensure you have the correct Firebase SDKs linked in your index.html for any Firebase functionality.
// For example, to use Lucide icons, ensure this script is included in your HTML:
// <script src="https://unpkg.com/lucide@0.290.0/dist/umd/lucide.js"></script>
// <script>lucide.createIcons();</script>
// The above script is for UMD builds. For module usage, you'd typically import it.
// Given the existing HTML structure, ensure the lucide script is correctly referenced.
// If you are seeing "Lucide icons library not loaded", check your index.html.
// For this current setup, I've added a check and a warning if lucide is not found.

// --- Placeholder for other functionalities ---
// Add more JavaScript logic here as needed for your application.
// For example, form handling, interactive elements, API calls, etc.

// Example: A function to handle form submissions
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted with data:', data);
    // Here you would typically send the data to a server or process it further
}

// If you have forms in your HTML, you can attach event listeners like this:
// const contactForm = document.getElementById('contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', handleFormSubmit);
// }
;