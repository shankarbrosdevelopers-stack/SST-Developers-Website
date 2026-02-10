// ===== SVG ICONS =====
const icons = {
    home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,

    menu: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,

    x: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,

    search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>`,

    mapPin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,

    indianRupee: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M6 13h3"></path><path d="M9 13c6.667 0 6.667-10 0-10"></path></svg>`,

    bed: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>`,

    bath: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1 2.5V6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.5a1.5 1.5 0 0 0-1-2.5L16 6"></path><path d="M22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6"></path><path d="M2 12h20"></path></svg>`,

    move: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>`,

    arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,

    building: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>`,

    trees: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13v8"></path><path d="M12 3v3"></path><path d="m9 8 3-3 3 3"></path><path d="M9 21h6"></path><path d="M9 8h6"></path></svg>`,

    castle: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"></path><path d="M18 11V4H6v7"></path><path d="M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"></path><path d="M22 11V9"></path><path d="M2 11V9"></path><path d="M6 4V2"></path><path d="M18 4V2"></path><path d="M10 4V2"></path><path d="M14 4V2"></path></svg>`,

    landPlot: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 8 6-3-6-3v10"></path><path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"></path><path d="m6.49 12.85 11.02 6.3"></path><path d="M17.51 12.85 6.5 19.15"></path></svg>`,

    phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,

    mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,

    facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,

    twitter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,

    instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,

    linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,

    send: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,

    chevronDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,

    chevronUp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`,

    star: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,

    quote: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>`,

    shieldCheck: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`,

    checkCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,

    headset: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>`,

    fileCheck: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>`,

    calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,

    clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
};

// ===== STATE MANAGEMENT =====
let currentPage = 'home';
let isMobileMenuOpen = false;

// ===== DYNAMIC DATA =====
const events = [
    { id: 1, src: "images/event1.jpg", alt: "Team Meeting & Planning" },
    { id: 2, src: "images/event2.jpg", alt: "Celebrating 10 Years of Excellence" },
    { id: 3, src: "images/event3.jpg", alt: "Client Appreciation Event" },
    { id: 4, src: "images/event4.jpg", alt: "New Project Launch" },
    { id: 5, src: "images/event5.jpg", alt: "Award Ceremony" },
];

// ===== UTILITY FUNCTIONS =====
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function createElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}

function renderGalleryEvents() {
    const track = $('#event-marquee-track');
    if (!track) return;

    // Clear existing
    track.innerHTML = '';

    // Double the events for seamless loop
    const marqueeItems = [...events, ...events];

    marqueeItems.forEach(event => {
        const item = createElement(`
            <div class="marquee-item">
                <img src="${event.src}" alt="${event.alt}">
                <div class="marquee-overlay"></div>
                <div class="marquee-caption">
                    <span>${event.alt}</span>
                </div>
            </div>
        `);
        track.appendChild(item);
    });
}

// ===== NAVIGATION =====
function navigate(page, scrollTo = null) {
    currentPage = page;

    // Hide all pages
    $$('.page').forEach(p => p.classList.add('hidden'));

    // Show selected page
    $(`#${page}-page`).classList.remove('hidden');

    // Update active nav links
    $$('nav button, .mobile-menu button').forEach(btn => {
        btn.classList.remove('active');
    });

    $$(`[data-page="${page}"]`).forEach(btn => {
        // If the button has a specific scroll target, don't mark it active generically unless it matches
        if (!scrollTo || btn.getAttribute('data-scroll-to') === scrollTo) {
            btn.classList.add('active');
        }
    });

    // Update header style
    const header = $('header');
    if (page === 'home') {
        header.classList.remove('not-home');
    } else {
        header.classList.add('not-home');
    }

    // Close mobile menu
    closeMobileMenu();

    // Scroll handling
    if (scrollTo) {
        setTimeout(() => {
            const el = document.getElementById(scrollTo);
            if (el) {
                const headerOffset = 80;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const mobileMenu = $('.mobile-menu');
    const menuIcon = $('.mobile-menu-toggle');

    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.innerHTML = icons.x;
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.innerHTML = icons.menu;
    }
}

function closeMobileMenu() {
    isMobileMenuOpen = false;
    $('.mobile-menu').classList.add('hidden');
    $('.mobile-menu-toggle').innerHTML = icons.menu;
}

// ===== SCROLL HANDLER =====
function handleScroll() {
    const header = $('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ===== FAQ ACCORDION =====
function toggleFAQ(index) {
    const faqItems = $$('.faq-item');
    const clickedItem = faqItems[index];
    const isActive = clickedItem.classList.contains('active');

    // Close all items
    faqItems.forEach(item => item.classList.remove('active'));

    // Open clicked item if it wasn't active
    if (!isActive) {
        clickedItem.classList.add('active');
    }
}

// ===== FORM HANDLER =====
function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    e.target.reset();
}

// ===== EXTERNAL LINKS =====
function openVirtualTour() {
    window.open('https://shankarbrosdevelopers-stack.github.io/VirtualHomeTour/', '_blank');
}

function openGoogleMaps() {
    window.open('https://www.google.com/maps/search/?api=1&query=8VMM%2B2V+Pahala%2C+Odisha', '_blank');
}

// ===== SCHEDULE VISIT MODAL =====
function openScheduleVisitModal(title = 'Schedule Your Visit') {
    const modal = $('#schedule-visit-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Update Title
        const titleEl = modal.querySelector('h2');
        if (titleEl) {
            titleEl.innerText = title;
        }

        // Set minimum date to today
        const dateInput = $('#visit-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        // Reinject icons in modal
        modal.querySelectorAll('[data-icon]').forEach(el => {
            const iconName = el.getAttribute('data-icon');
            if (icons[iconName]) {
                el.innerHTML = icons[iconName];
            }
        });
    }
}

function closeScheduleVisitModal() {
    const modal = $('#schedule-visit-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';

        // Reset form
        const form = $('#schedule-visit-form');
        if (form) {
            form.reset();
        }
    }
}

function handleScheduleVisitSubmit(e) {
    e.preventDefault();
    alert('Thank you! We will contact you shortly to confirm your visit.');
    closeScheduleVisitModal();
}

// ===== EMI CALCULATOR =====
function openEMIModal() {
    $('#emi-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Reinject icons
    $('#emi-modal').querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.getAttribute('data-icon');
        if (icons[iconName]) {
            el.innerHTML = icons[iconName];
        }
    });
}

function closeEMIModal() {
    $('#emi-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

function calculateEMI() {
    const amount = parseFloat($('#emi-amount').value);
    const rate = parseFloat($('#emi-rate').value);
    const tenure = parseFloat($('#emi-tenure').value);

    if (amount && rate && tenure) {
        const r = rate / 12 / 100;
        const n = tenure * 12;
        const emi = amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - amount;

        $('#emi-value').innerText = '₹' + Math.round(emi).toLocaleString('en-IN');
        $('#emi-interest').innerText = '₹' + Math.round(totalInterest).toLocaleString('en-IN');
        $('#emi-total').innerText = '₹' + Math.round(totalPayment).toLocaleString('en-IN');
        $('#emi-result-box').style.display = 'block';
    }
}


// ===== MODAL LOGIC =====
function showProjectDetails(el) {
    const modal = $('#project-modal');
    if (!modal) return;

    // Get data from attributes
    const d = el.dataset;

    // Populate modal
    $('#modal-title').innerText = d.title || '';
    $('#modal-loc-text').innerText = d.location || '';
    $('#modal-price').innerText = d.price || '';
    $('#modal-img').src = d.image || '';

    // Type/Badge
    $('#modal-badge').innerText = d.type || 'New Project';

    // Area
    const areaStat = $('#modal-area-stat');
    if (d.sqft || d.area) {
        areaStat.classList.remove('hidden');
        $('#modal-area').innerText = d.sqft ? `${d.sqft} sqft` : d.area;
    } else {
        areaStat.classList.add('hidden');
    }

    // Possession
    const possStat = $('#modal-possession-stat');
    if (d.possession) {
        possStat.classList.remove('hidden');
        $('#modal-possession').innerText = d.possession;
    } else {
        possStat.classList.add('hidden');
    }

    // RERA
    const reraStat = $('#modal-rera-stat');
    if (d.rera) {
        reraStat.classList.remove('hidden');
        $('#modal-rera').innerText = d.rera;
    } else {
        reraStat.classList.add('hidden');
    }

    // Amenities
    const amenitiesSection = $('#modal-amenities-section');
    const amenitiesContainer = $('#modal-amenities');
    amenitiesContainer.innerHTML = '';

    if (d.amenities) {
        amenitiesSection.classList.remove('hidden');
        d.amenities.split(',').forEach(amenity => {
            const span = document.createElement('span');
            span.innerHTML = `<span data-icon="checkCircle" style="display:inline-flex; vertical-align:middle; margin-right:4px;"></span> ${amenity.trim()}`;
            amenitiesContainer.appendChild(span);
        });
    } else {
        amenitiesSection.classList.add('hidden');
    }

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scroll

    // Reinject icons in modal
    modal.querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.getAttribute('data-icon');
        if (icons[iconName]) {
            el.innerHTML = icons[iconName];
        }
    });

    // Handle Brochure Download
    const downloadBtn = $('#modal-download-btn');
    if (downloadBtn) {
        if (d.brochure) {
            downloadBtn.style.display = 'block'; // Show if available
            // Clone button to remove old event listeners to prevent multiple clicks
            const newBtn = downloadBtn.cloneNode(true);
            downloadBtn.parentNode.replaceChild(newBtn, downloadBtn);

            newBtn.addEventListener('click', () => {
                const link = document.createElement('a');
                link.href = d.brochure;
                link.download = d.brochure.split('/').pop(); // Suggest filename
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        } else {
            downloadBtn.style.display = 'none'; // Hide if not available
        }
    }

    // Handle Request Callback Button (Open Schedule Visit Modal)
    const requestBtn = $('#modal-request-btn');
    if (requestBtn) {
        // Clone to remove old listeners
        const newRequestBtn = requestBtn.cloneNode(true);
        requestBtn.parentNode.replaceChild(newRequestBtn, requestBtn);

        newRequestBtn.addEventListener('click', () => {
            closeModal(); // Close project details modal
            openScheduleVisitModal('Request Call Back'); // Open schedule visit modal with specific title
        });
    }
}

function closeModal() {
    const modal = $('#project-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scroll
    }
}

// ===== SEARCH FILTER LOGIC =====
function handleSearch() {
    const location = $('#search-location').value;
    const type = $('#search-type').value;
    const budget = $('#search-budget').value;

    // Get multiple property cards - ONLY from trending section
    const cards = $$('#trending-properties .property-card');
    let matchCount = 0;

    cards.forEach(card => {
        const d = card.dataset;
        let isMatch = true;

        // Location Filter (Sub-string match or exact match, handling multiple values)
        if (location) {
            const searchLocations = location.toLowerCase().split(',').map(l => l.trim());
            const propertyLocation = d.location.toLowerCase();

            const matchFound = searchLocations.some(loc => propertyLocation.includes(loc));
            if (!matchFound) {
                isMatch = false;
            }
        }

        // Type Filter
        if (type && d.type.toLowerCase() !== type.toLowerCase()) {
            isMatch = false;
        }

        // Budget Filter
        if (budget && isMatch) {
            // Convert price string to number (Lakhs)
            let priceInLakhs = 0;
            const priceStr = d.price;

            if (priceStr.includes('Cr')) {
                priceInLakhs = parseFloat(priceStr.replace(/[^0-9.]/g, '')) * 100;
            } else {
                priceInLakhs = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
            }

            switch (budget) {
                case 'under-75l':
                    if (priceInLakhs >= 75) isMatch = false;
                    break;
                case 'under-1cr':
                    if (priceInLakhs >= 100) isMatch = false;
                    break;
                case 'under-2cr':
                    if (priceInLakhs >= 200) isMatch = false;
                    break;
            }
        }

        // Apply visual state
        if (isMatch) {
            card.classList.remove('property-card-dimmed');
            card.classList.add('property-card-highlighted');
            matchCount++;
        } else {
            card.classList.add('property-card-dimmed');
            card.classList.remove('property-card-highlighted');
        }
    });

    // Reset if no filters active
    if (!location && !type && !budget) {
        cards.forEach(card => {
            card.classList.remove('property-card-dimmed');
            card.classList.remove('property-card-highlighted');
        });
    }

    // Scroll to results
    const trendingSection = document.getElementById('trending-properties');
    if (trendingSection) {
        trendingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function () {
    // Inject all icons
    document.querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.getAttribute('data-icon');
        if (icons[iconName]) {
            el.innerHTML = icons[iconName];
        }
    });

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Setup navigation
    $$('[data-page]').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.getAttribute('data-page');
            const scrollTo = btn.getAttribute('data-scroll-to');
            navigate(page, scrollTo);
        });
    });

    // Setup mobile menu toggle
    $('.mobile-menu-toggle').addEventListener('click', toggleMobileMenu);

    // Setup FAQ accordions
    $$('.faq-question').forEach((btn, index) => {
        btn.addEventListener('click', () => toggleFAQ(index));
    });

    // Setup contact form
    $('#contact-form').addEventListener('submit', handleContactSubmit);

    // Setup virtual tour button
    $$('.virtual-tour-btn').forEach(btn => {
        btn.addEventListener('click', openVirtualTour);
    });

    // Setup map link
    $('.map-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        openGoogleMaps();
    });

    // Setup Modal Close
    $('#close-modal')?.addEventListener('click', closeModal);
    $('#project-modal')?.addEventListener('click', (e) => {
        if (e.target === $('#project-modal')) closeModal();
    });

    // Setup Search
    $('#search-btn')?.addEventListener('click', handleSearch);

    // Render Dynamic Gallery
    renderGalleryEvents();

    // Initialize first page
    navigate('home');

    // Open first FAQ by default
    // Open first FAQ by default - DISABLED
    // if ($$('.faq-item').length > 0) {
    //     $$('.faq-item')[0].classList.add('active');
    // }
});
