/**
 * NORTHSTAR HEATING & COOLING — script.js
 *
 * This file runs after the HTML has loaded (it's placed at the
 * bottom of <body>, so all elements exist by the time this runs).
 *
 * Features:
 *  1. Sticky header — adds a shadow when the page is scrolled
 *  2. Mobile navigation — hamburger button opens/closes a slide-in panel
 *  3. Smooth scroll — custom scroll offset accounts for the sticky header
 *  4. Back-to-top button — appears after scrolling 400px
 *  5. Scroll animations — IntersectionObserver fades elements in on enter
 *  6. Contact form — async Formspree submission with success/error feedback
 */


/* ──────────────────────────────────────────────────────────────────
   UTILITY: getElementById shorthand
   document.getElementById is long to type — this wraps it.
   Usage: get('site-header') instead of document.getElementById(...)
────────────────────────────────────────────────────────────────── */
function get(id) {
    return document.getElementById(id);
}


/* ──────────────────────────────────────────────────────────────────
   1. STICKY HEADER SHADOW
   The header is already sticky via CSS (position: sticky).
   This JS listens for scroll events and adds a shadow class
   to make the header feel more "lifted" once you've scrolled down.
────────────────────────────────────────────────────────────────── */
const siteHeader = get('site-header');

function updateHeaderShadow() {
    // window.scrollY = how many pixels from the top of the page we've scrolled
    if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');    // CSS adds box-shadow when .scrolled
    } else {
        siteHeader.classList.remove('scrolled');
    }
}

// { passive: true } tells the browser this listener won't call preventDefault()
// — allows the browser to optimize scroll performance
window.addEventListener('scroll', updateHeaderShadow, { passive: true });


/* ──────────────────────────────────────────────────────────────────
   2. MOBILE NAVIGATION TOGGLE
   On mobile, the <nav> slides in from the right as a panel.
   The hamburger button and a dark overlay control this.
────────────────────────────────────────────────────────────────── */
const navToggle  = get('nav-toggle');
const mainNav    = get('main-nav');
const navOverlay = get('nav-overlay');

function openNav() {
    mainNav.classList.add('open');        // CSS slides the panel into view
    navOverlay.classList.add('active');   // CSS shows the dark overlay
    navToggle.classList.add('open');      // CSS animates hamburger → ✕
    navToggle.setAttribute('aria-expanded', 'true');
    // Prevent the page body from scrolling while the nav is open
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    mainNav.classList.remove('open');
    navOverlay.classList.remove('active');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';  // Restore scrolling
}

// Toggle nav open/closed when hamburger is clicked
navToggle.addEventListener('click', () => {
    mainNav.classList.contains('open') ? closeNav() : openNav();
});

// Click the overlay to close
navOverlay.addEventListener('click', closeNav);

// Close when a nav link is clicked (user is navigating to a section)
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
});

// Close on Escape key — keyboard accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
});


/* ──────────────────────────────────────────────────────────────────
   3. SMOOTH SCROLL WITH STICKY HEADER OFFSET
   CSS scroll-behavior: smooth is built-in, but it scrolls so the
   target sits at the very top of the viewport — directly behind
   our sticky header. This JS version adjusts the scroll position
   to account for the header height.
────────────────────────────────────────────────────────────────── */
const HEADER_HEIGHT = 68; // pixels — matches the header's rendered height

// Select all links whose href starts with # (anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');

        // Ignore lone "#" links (like social icon placeholders)
        if (targetSelector === '#') return;

        const target = document.querySelector(targetSelector);
        if (!target) return;

        e.preventDefault(); // Stop the browser's default jump behavior

        // getBoundingClientRect().top = distance from top of viewport
        // + window.scrollY converts that to an absolute page position
        // - HEADER_HEIGHT = nudge up so the section isn't hidden behind the header
        const targetTop = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

        window.scrollTo({
            top: targetTop,
            behavior: 'smooth',
        });
    });
});


/* ──────────────────────────────────────────────────────────────────
   4. BACK-TO-TOP BUTTON
   The button sits in the bottom-right corner (CSS: position: fixed).
   It's hidden by default and becomes visible after scrolling 400px.
────────────────────────────────────────────────────────────────── */
const backToTopBtn = get('back-to-top');

function updateBackToTop() {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');    // CSS fades it in
    } else {
        backToTopBtn.classList.remove('visible'); // CSS fades it out
    }
}

window.addEventListener('scroll', updateBackToTop, { passive: true });

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ──────────────────────────────────────────────────────────────────
   5. SCROLL ANIMATIONS (IntersectionObserver)
   IntersectionObserver is a modern browser API that fires a callback
   whenever a watched element enters or exits the viewport.

   We use it to add a .visible class to elements as they scroll into
   view — triggering a CSS fade-in-up transition (defined in style.css).

   Why not use a scroll event listener?
   → IntersectionObserver is more performant: it runs off the main
     thread and doesn't fire constantly as the user scrolls.
────────────────────────────────────────────────────────────────── */

// List of CSS selectors whose elements should animate in on scroll
const ANIMATED_SELECTORS = [
    '.section-header',
    '.service-card',
    '.trust-stat',
    '.testimonial-card',
    '.gallery-item',
    '.pricing-card',
    '.cert-badge',
    '.contact-info',
    '#contact-form',
    '.about-image',
    '.about-text',
    '.chip',
    '.contact-detail',
];

// Find all matching elements and mark them for animation
ANIMATED_SELECTORS.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add('fade-up'); // CSS starts them invisible + shifted down

        // Stagger: each item in a group delays slightly longer than the last
        // Math.min caps the delay at 480ms so the last card doesn't wait too long
        el.style.transitionDelay = `${Math.min(index * 75, 480)}ms`;
    });
});

// IntersectionObserver config
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element has entered the viewport — add .visible to trigger CSS transition
                entry.target.classList.add('visible');
                // Once it's animated in, stop watching it (no need to re-trigger)
                observer.unobserve(entry.target);
            }
        });
    },
    {
        root: null,        // Use the browser viewport as the root
        rootMargin: '0px',
        threshold: 0.1,    // Trigger when 10% of the element is visible
    }
);

// Attach the observer to every .fade-up element
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


/* ──────────────────────────────────────────────────────────────────
   6. CONTACT FORM — Async Formspree Submission
   Instead of letting the form redirect to a Formspree confirmation
   page, we intercept the submit event and use the Fetch API to send
   the data in the background (AJAX). Then we replace the form with
   a thank-you message or show an error.

   TO ACTIVATE: Replace YOUR_FORM_ID in index.html with your real
   Formspree form ID. Get one free at https://formspree.io
────────────────────────────────────────────────────────────────── */
const contactForm = get('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        // Prevent the browser from submitting the form the traditional way
        // (which would navigate away from the page)
        e.preventDefault();

        const submitBtn = this.querySelector('[type="submit"]');
        const originalHTML = submitBtn.innerHTML;

        // 1. Show a loading state on the button
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // 2. Send the form data to Formspree asynchronously
            //    FormData automatically collects all the form field values
            const response = await fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }, // Tells Formspree to return JSON
            });

            if (response.ok) {
                // 3a. Success — replace the form with a thank-you message
                contactForm.innerHTML = `
                    <div class="form-success">
                        <i class="fa-solid fa-circle-check"></i>
                        <h3>Message Sent!</h3>
                        <p>
                            Thanks for reaching out. We'll get back to you within one business day.
                            For urgent needs, call us at
                            <a href="tel:7805550100">780-555-0100</a>.
                        </p>
                    </div>
                `;
            } else {
                // Formspree returned a non-OK status (e.g., 422 validation error)
                throw new Error('Formspree returned an error status');
            }

        } catch {
            // 3b. Something went wrong — restore the button and show an error
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;

            // Remove any existing error message before adding a new one
            const existingError = contactForm.querySelector('.form-error');
            if (existingError) existingError.remove();

            // Create and insert the error message before the submit button
            const errorEl = document.createElement('p');
            errorEl.className = 'form-error';
            errorEl.textContent = 'Something went wrong. Please try again or call us directly at 780-555-0100.';
            submitBtn.before(errorEl);
        }
    });
}


/* ──────────────────────────────────────────────────────────────────
   6b. HERO BOOKING FORM — same async Formspree logic as above,
   but the success state replaces only the form fields (not the
   whole card) so the navy header stays visible.
────────────────────────────────────────────────────────────────── */
const heroBookingForm = get('hero-booking-form');

if (heroBookingForm) {
    heroBookingForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('[type="submit"]');
        const originalHTML = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' },
            });

            if (response.ok) {
                // Replace only the form (not the card header) with a success message
                heroBookingForm.outerHTML = `
                    <div class="hf-success">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Request received! We'll call you within the hour.</p>
                    </div>
                `;
            } else {
                throw new Error('Formspree error');
            }
        } catch {
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;

            const existingError = heroBookingForm.querySelector('.form-error');
            if (existingError) existingError.remove();

            const errorEl = document.createElement('p');
            errorEl.className = 'form-error';
            errorEl.textContent = 'Something went wrong. Please try again or call 780-555-0100.';
            submitBtn.before(errorEl);
        }
    });
}
