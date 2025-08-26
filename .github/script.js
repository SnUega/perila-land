// INOX Master Landing - Main JavaScript - Optimized

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Data structures
const photos = [
    { id: 1, src: "img/perila.jpg", tags:["rails"], title:{ro:"Balustradă", ru:"Перила", en:"Railings"}, caption:{ro:"Pereți din inox", ru:"Перила из нержавейки", en:"Stainless railings"}},
    { id: 2, src: "img/stairs.jpg", tags:["stairs"], title:{ro:"Scări", ru:"Лестницы", en:"Stairs"}, caption:{ro:"Structură metalică", ru:"Металлические конструкции", en:"Metal structures"}},
    { id: 3, src: "img/balcony.jpg", tags:["rails"], title:{ro:"Balkon", ru:"Балкон", en:"Balcony"}, caption:{ro:"Ograjde de siguranță", ru:"Ограждения безопасности", en:"Safety railings"}},
    { id: 4, src: "img/perila-stairs.jpg", tags:["stairs"], title:{ro:"Scări cu pereți", ru:"Лестницы с перилами", en:"Stairs with railings"}, caption:{ro:"Design modern", ru:"Современный дизайн", en:"Modern design"}},
    { id: 5, src: "img/perila-balcony.jpg", tags:["rails"], title:{ro:"Balkon elegant", ru:"Элегантный балкон", en:"Elegant balcony"}, caption:{ro:"Finisaj de calitate", ru:"Качественная отделка", en:"Quality finish"}},
    { id: 6, src: "img/perila-stairs-1.jpg", tags:["stairs"], title:{ro:"Scări interioare", ru:"Внутренние лестницы", en:"Interior stairs"}, caption:{ro:"Combinare perfectă", ru:"Идеальное сочетание", en:"Perfect combination"}},
    { id: 7, src: "img/perila-stairs-2.jpg", tags:["stairs"], title:{ro:"Scări exterioare", ru:"Внешние лестницы", en:"Exterior stairs"}, caption:{ro:"Rezistență la intemperii", ru:"Устойчивость к погодным условиям", en:"Weather resistance"}},
    { id: 8, src: "img/perila-stairs-3.jpg", tags:["stairs"], title:{ro:"Scări metalice", ru:"Металлические лестницы", en:"Metal stairs"}, caption:{ro:"Durabilitate", ru:"Долговечность", en:"Durability"}},
    { id: 9, src: "img/perila-stairs-4.jpg", tags:["stairs"], title:{ro:"Scări moderne", ru:"Современные лестницы", en:"Modern stairs"}, caption:{ro:"Estetică și funcționalitate", ru:"Эстетика и функциональность", en:"Aesthetics and functionality"}},
    { id: 10, src: "img/perila-balcony-1.jpg", tags:["rails"], title:{ro:"Balkon panoramic", ru:"Панорамный балкон", en:"Panoramic balcony"}, caption:{ro:"Vedere spectaculoasă", ru:"Впечатляющий вид", en:"Spectacular view"}},
    { id: 11, src: "img/perila-naves.jpg", tags:["canopies"], title:{ro:"Nave industriale", ru:"Промышленные навесы", en:"Industrial canopies"}, caption:{ro:"Construcții robuste", ru:"Прочные конструкции", en:"Robust constructions"}},
    { id: 12, src: "img/glass-build.jpg", tags:["canopies"], title:{ro:"Construcții din sticlă", ru:"Стеклянные конструкции", en:"Glass constructions"}, caption:{ro:"Transparență și eleganță", ru:"Прозрачность и элегантность", en:"Transparency and elegance"}},
    { id: 13, src: "img/glass-build-1.jpg", tags:["canopies"], title:{ro:"Copertine moderne", ru:"Современные козырьки", en:"Modern canopies"}, caption:{ro:"Design inovativ", ru:"Инновационный дизайн", en:"Innovative design"}},
    { id: 14, src: "img/glass-build-2.jpg", tags:["canopies"], title:{ro:"Sisteme de acoperire", ru:"Системы покрытия", en:"Covering systems"}, caption:{ro:"Protecție eficientă", ru:"Эффективная защита", en:"Effective protection"}},
    { id: 15, src: "img/glass-build-3.jpg", tags:["canopies"], title:{ro:"Construcții complexe", ru:"Сложные конструкции", en:"Complex constructions"}, caption:{ro:"Inginerie avansată", ru:"Передовая инженерия", en:"Advanced engineering"}},
    { id: 16, src: "img/foundation.jpg", tags:["custom"], title:{ro:"Fundații", ru:"Фундаменты", en:"Foundations"}, caption:{ro:"Stabilitate garantată", ru:"Гарантированная стабильность", en:"Guaranteed stability"}},
    { id: 17, src: "img/foundation-1.jpg", tags:["custom"], title:{ro:"Structuri de bază", ru:"Базовые конструкции", en:"Base structures"}, caption:{ro:"Calitate superioară", ru:"Превосходное качество", en:"Superior quality"}},
    { id: 18, src: "img/railing.jpg", tags:["rails"], title:{ro:"Ograjde", ru:"Ограждения", en:"Guardrails"}, caption:{ro:"Siguranță maximă", ru:"Максимальная безопасность", en:"Maximum safety"}},
];

const tags = [
    { key: "rails", label: { ro: "Balustrade & mîniere", ru: "Перила и ограждения", en: "Rails & Guardrails" }},
    { key: "stairs", label: { ro: "Scări", ru: "Лестницы", en: "Stairs" }},
    { key: "canopies", label: { ro: "Copertine & marchize", ru: "Козырьки и навесы", en: "Canopies & Awnings" }},
    { key: "tanks", label: { ro: "Rezervoare & bazine", ru: "Емкости и баки", en: "Tanks & Vessels" }},
    { key: "furniture", label: { ro: "Mobilier", ru: "Мебель", en: "Furniture" }},
    { key: "retail", label: { ro: "Echipamente comerciale", ru: "Торговое оборудование", en: "Retail Equipment" }},
    { key: "exhaust", label: { ro: "Sisteme de evacuare", ru: "Выхлопные системы", en: "Exhaust Systems" }},
    { key: "decor", label: { ro: "Decor & elemente", ru: "Декор и элементы", en: "Decor Elements" }},
    { key: "custom", label: { ro: "Construcții atipice", ru: "Нестандартные конструкции", en: "Custom Builds" }},
];

// Optimized texts object with better structure
const texts = {
    ro: {
        brand: "Meșter inox — catalog lucrări & servicii",
        nav: { catalog: "Catalog", gallery: "Galerie", about: "Despre meșter", contact: "Contact" },
        hero: {
            headline: "Oțel inox la comandă: proiectare, fabricare și montaj",
            sub: "Balustrade, ograjde, scări, copertine, navese, rezervoare, mobilier, echipamente comerciale, sisteme de evacuare, elemente de decor și construcții atipice după desene.",
            points: ["Măsurare la fața locului", "Prototipare rapidă", "Sudură TIG/MIG", "Garanție 12 luni"],
            sustainable: "Lucrare curată, materiale reciclabile, întreținere minimă.",
        },
        sections: { catalog: "Servicii principale", gallery: "Galerie foto", about: "Despre meșter", contact: "Solicită ofertă", improvements: "Îmbunătățiri incluse", testimonials: "Testimoniale", faq: "Întrebări frecvente" },
        cta: { getQuote: "Cere ofertă", viewWork: "Vezi lucrările", call: "Sună", email: "Email" },
        catalogIntro: "Alegeți domeniul — lucrăm la cheie, de la concept la montaj.",
        catalog: {
            items: {
                rails: { title: "Balustrade și ograjde", desc: "Balustrade din inox pentru interior și exterior, proiectare și montaj." },
                stairs: { title: "Scări", desc: "Structuri metalice precise, trepte din lemn/sticlă la alegere." },
                canopies: { title: "Copertine și nave", desc: "Protecție elegantă împotriva precipitațiilor, montaj de încredere." },
                tanks: { title: "Rezervoare și bazine", desc: "Rezervoare alimentare și tehnice, sudură TIG de calitate." },
                furniture: { title: "Mobilier și decor", desc: "Mese, rafturi, structuri personalizate minimaliste." },
                retail: { title: "Echipamente comerciale", desc: "Standuri, vitrine, baruri — durabile și igienice." },
                exhaust: { title: "Sisteme de evacuare", desc: "Trasee personalizate, sudură curată, montaj precis." },
                custom: { title: "Construcții atipice", desc: "Realizăm conform desenelor și schițelor." }
            }
        },
        galleryIntro: "Exemple reale. Faceți clic pe orice pentru mărire.",
        view: "Mărește",
        search: "Caută în galerie…",
        about: {
            alt: "Meșter sudor la lucru",
            text1: "Sunt meșter cu peste 10 ani experiență în inox. Proiectez, tai, îndoi și sudez cu precizie pentru spații rezidențiale și comerciale.",
            bullets: ["Consultanță tehnică și estetică", "Măsurători și montaj", "Termene clare și comunicare rapidă"],
            photoComing: "Fotografia meșterului va fi adăugată mai târziu"
        },
        testimonials: [
            { text: "Balustrada a ieșit perfect, montaj curat.", author: "Ana, Chișinău" },
            { text: "Rezervor alimentar sudat impecabil.", author: "Iurie, HORECA" },
        ],
        faq: [
            { q: "Lucrați după desenele noastre?", a: "Da, realizăm conform desenelor sau putem propune soluții proprii." },
            { q: "În cât timp livrați?", a: "Depinde de complexitate; proiectele tipice 1–3 săptămâni." },
        ],
        contact: { text: "Scrieți câteva detalii (dimensiuni, poze, termen) și revenim rapid cu estimare." },
        form: { name: "Nume", phone: "Telefon", message: "Mesaj", email: "Email" },
        improvements: [
            "Selector limbă persistent în antet",
            "Filtre pe categorii + căutare în galerie",
            "Încărcare imaginilor cu lazy-load",
            "Buton în sus fix, vizibil după scroll",
            "Schema.org pentru SEO și rich results",
        ]
    },
    ru: {
        brand: "Мастер по нержавеющей стали — каталог работ и услуг",
        nav: { catalog: "Каталог", gallery: "Галерея", about: "О мастере", contact: "Контакты" },
        hero: {
            headline: "Нержавеющая сталь на заказ: проектирование, изготовление и монтаж",
            sub: "Изготовление и монтаж перил, ограждений, лестниц, козырьков, навесов, ёмкостей, баков, мебели, торгового оборудования, выхлопных систем, элементов декора и нестандартных конструкций по чертежам.",
            points: ["Замеры на объекте", "Быстрые прототипы", "Сварка TIG/MIG", "Гарантия 12 месяцев"],
            sustainable: "Чистая работа, перерабатываемые материалы, минимум обслуживания.",
        },
        sections: { catalog: "Основные услуги", gallery: "Фотогалерея", about: "О мастере", contact: "Заявка/Контакты", improvements: "Улучшения", testimonials: "Отзывы", faq: "FAQ" },
        cta: { getQuote: "Получить смету", viewWork: "Посмотреть работы", call: "Позвонить", email: "Email" },
        catalogIntro: "Выберите направление — работаем под ключ, от идеи до монтажа.",
        catalog: {
            items: {
                rails: { title: "Перила и ограждения", desc: "Нержавеющие перила для интерьера и улицы, проектирование и монтаж." },
                stairs: { title: "Лестницы", desc: "Точные металлические каркасы, ступени из дерева/стекла по выбору." },
                canopies: { title: "Козырьки и навесы", desc: "Элегантная защита от осадков, надежный монтаж." },
                tanks: { title: "Емкости и баки", desc: "Пищевые и технические ёмкости, качественная TIG-сварка." },
                furniture: { title: "Мебель и декор", desc: "Столы, стеллажи, минималистичные кастомные каркасы." },
                retail: { title: "Торговое оборудование", desc: "Стойки, витрины, бары — прочные и гигиеничные." },
                exhaust: { title: "Выхлопные системы", desc: "Кастомные трассы, чистая сварка, точная посадка." },
                custom: { title: "Нестандартные конструкции", desc: "Изготавливаем по чертежам и эскизам." }
            }
        },
        galleryIntro: "Реальные примеры. Нажмите для увеличения.",
        view: "Открыть",
        search: "Поиск по галерее…",
        about: {
            alt: "Мастер-сварщик за работой",
            text1: "Более 10 лет занимаюсь нержавейкой. Проектирую, режу, гну и свариваю с высокой точностью для частных и коммерческих объектов.",
            bullets: ["Техническая и эстетическая консультация", "Замер и монтаж", "Чёткие сроки и быстрая связь"],
            photoComing: "Фото мастера будет добавлено позже"
        },
        testimonials: [
            { text: "Перила получились идеально, монтаж аккуратный.", author: "Елена, Кишинёв" },
            { text: "Пищевой бак сварен безупречно.", author: "Сергей, HORECA" },
        ],
        faq: [
            { q: "Работаете по нашим чертежам?", a: "Да, изготавливаем по чертежам или предлагаем собственные решения." },
            { q: "Сроки изготовления?", a: "Зависят от сложности; типичные проекты 1–3 недели." },
        ],
        contact: { text: "Опишите размеры, фото и сроки — быстро посчитаем и свяжемся." },
        form: { name: "Имя", phone: "Телефон", message: "Сообщение", email: "Email" },
        improvements: [
            "Фиксированный переключатель языка",
            "Фильтры + поиск по галерее",
            "Ленивая загрузка изображений",
            "Кнопка вверх после прокрутки",
            "Schema.org разметка для SEO",
        ]
    },
    en: {
        brand: "Stainless steel master — works & services catalogue",
        nav: { catalog: "Catalogue", gallery: "Gallery", about: "About", contact: "Contact" },
        hero: {
            headline: "Custom stainless steel: design, fabrication & installation",
            sub: "Handrails, guardrails, stairs, canopies, awnings, tanks, vessels, furniture, retail fixtures, exhaust systems, decor elements, and bespoke builds per drawings.",
            points: ["On-site measurements", "Rapid prototyping", "TIG/MIG welding", "12‑month warranty"],
            sustainable: "Clean workmanship, recyclable materials, minimal maintenance.",
        },
        sections: { catalog: "Core services", gallery: "Photo gallery", about: "About the master", contact: "Request a quote", improvements: "Improvements included", testimonials: "Testimonials", faq: "FAQ" },
        cta: { getQuote: "Request quote", viewWork: "View work", call: "Call", email: "Email" },
        catalogIntro: "Pick a scope — we handle concept → installation.",
        catalog: {
            items: {
                rails: { title: "Railings & Guardrails", desc: "Stainless steel railings for interior and exterior, design and installation." },
                stairs: { title: "Stairs", desc: "Precise metal frames, wood/glass steps as preferred." },
                canopies: { title: "Canopies & Awnings", desc: "Elegant protection from precipitation, reliable installation." },
                tanks: { title: "Tanks & Vessels", desc: "Food and technical containers, quality TIG welding." },
                furniture: { title: "Furniture & Decor", desc: "Tables, shelves, minimalist custom frames." },
                retail: { title: "Retail Equipment", desc: "Counters, displays, bars — durable and hygienic." },
                exhaust: { title: "Exhaust Systems", desc: "Custom routes, clean welding, precise fit." },
                custom: { title: "Custom Builds", desc: "We manufacture according to drawings and sketches." }
            }
        },
        galleryIntro: "Real examples. Click any photo to zoom.",
        view: "View",
        search: "Search gallery…",
        about: {
            alt: "Welder at work",
            text1: "I have 10+ years of stainless experience. I design, cut, bend and weld precisely for residential and commercial spaces.",
            bullets: ["Tech & aesthetic consulting", "Site measurements & install", "Clear timelines and quick comms"],
            photoComing: "Master's photo will be added later"
        },
        testimonials: [
            { text: "The handrails turned out perfect—clean install.", author: "Anna, Chișinău" },
            { text: "Food-grade tank welded flawlessly.", author: "Yuri, HORECA" },
        ],
        faq: [
            { q: "Do you work from our drawings?", a: "Yes, we build per your drawings or propose our own solution." },
            { q: "Lead times?", a: "Depends on complexity; typical projects 1–3 weeks." },
        ],
        contact: { text: "Share dimensions, photos, timeline — we'll estimate and get back quickly." },
        form: { name: "Name", phone: "Phone", message: "Message", email: "Email" },
        improvements: [
            "Persistent language switcher in header",
            "Category filters + gallery search",
            "Lazy-loaded images",
            "Sticky back-to-top button",
            "Schema.org markup for SEO",
        ]
    },
};

// State variables
let currentLang = 'ru';
let activeTag = null;
let currentSearchQuery = '';
let currentModalIndex = 0;
let filteredPhotos = [...photos];

// Performance optimization: Cache DOM elements
const domCache = {
    langButtons: null,
    tagButtons: null,
    gallerySearch: null,
    galleryGrid: null,
    imageModal: null,
    modalImage: null,
    modalTitle: null,
    modalCaption: null,
    modalTags: null,
    closeModal: null,
    prevImage: null,
    nextImage: null,
    backToTop: null,
    contactForm: null,
    currentYearSpan: null
};

// Initialize DOM cache
function initializeDOMCache() {
    domCache.langButtons = document.querySelectorAll('.lang-btn');
    domCache.tagButtons = document.querySelectorAll('.tag-btn');
    domCache.gallerySearch = document.getElementById('gallery-search');
    domCache.galleryGrid = document.getElementById('gallery-grid');
    domCache.imageModal = document.getElementById('image-modal');
    domCache.modalImage = document.getElementById('modal-image');
    domCache.modalTitle = document.getElementById('modal-title');
    domCache.modalCaption = document.getElementById('modal-caption');
    domCache.modalTags = document.getElementById('modal-tags');
    domCache.closeModal = document.getElementById('close-modal');
    domCache.prevImage = document.getElementById('prev-image');
    domCache.nextImage = document.getElementById('next-image');
    domCache.backToTop = document.getElementById('back-to-top');
    domCache.contactForm = document.getElementById('contact-form');
    domCache.currentYearSpan = document.getElementById('current-year');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize DOM cache first
    initializeDOMCache();
    
    // Set current year
    domCache.currentYearSpan.textContent = new Date().getFullYear();
    
    // Initialize gallery
    renderGallery();
    
    // Initialize event listeners
    setupEventListeners();
    
    // Initialize GSAP animations
    initializeAnimations();
    
    // Initialize language switcher
    updateLanguageUI();
    
    // Initialize icons
    lucide.createIcons();
    
    // Add JS loaded class for CSS fallbacks
    document.body.classList.add('js-loaded');
}

function setupEventListeners() {
    // Language switcher
    domCache.langButtons.forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });
    
    // Tag filters
    domCache.tagButtons.forEach(btn => {
        btn.addEventListener('click', () => toggleTagFilter(btn.dataset.tag));
    });
    
    // Gallery search
    domCache.gallerySearch.addEventListener('input', debounce((e) => {
        currentSearchQuery = e.target.value;
        filterAndRenderGallery();
    }, 300)); // Debounce for 300ms
    
    // Modal controls
    domCache.closeModal.addEventListener('click', closeImageModal);
    domCache.prevImage.addEventListener('click', showPreviousImage);
    domCache.nextImage.addEventListener('click', showNextImage);
    
    // Close modal on outside click
    domCache.imageModal.addEventListener('click', (e) => {
        if (e.target === domCache.imageModal) closeImageModal();
    });
    
    // Back to top button
    domCache.backToTop.addEventListener('click', scrollToTop);
    
    // Scroll event for back to top button
    window.addEventListener('scroll', handleScroll);
    
    // Contact form
    domCache.contactForm.addEventListener('submit', handleContactForm);
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', handleKeyboard);
    

}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update language buttons
    domCache.langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('bg-blue-600', 'text-white');
            btn.classList.remove('hover:bg-gray-100');
        } else {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('hover:bg-gray-100');
        }
    });
    
    // Update content
    updateContent();
    updateLanguageUI();
}

function updateContent() {
    // Update navigation
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length >= 4) {
        navLinks[0].textContent = texts[currentLang].nav.catalog;
        navLinks[1].textContent = texts[currentLang].nav.gallery;
        navLinks[2].textContent = texts[currentLang].nav.about;
        navLinks[3].textContent = texts[currentLang].nav.contact;
    }
    

    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = texts[currentLang].hero.headline;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = texts[currentLang].hero.sub;
    
    // Update hero points
    const heroPoints = document.querySelectorAll('.hero-points span');
    texts[currentLang].hero.points.forEach((point, i) => {
        if (heroPoints[i]) heroPoints[i].textContent = point;
    });
    
    // Update CTA buttons
    const ctaPrimary = document.querySelector('.cta-primary');
    if (ctaPrimary) ctaPrimary.innerHTML = `${texts[currentLang].cta.getQuote} <i data-lucide="chevron-right" class="h-4 w-4"></i>`;
    
    const ctaSecondary = document.querySelector('.cta-secondary');
    if (ctaSecondary) ctaSecondary.textContent = texts[currentLang].cta.viewWork;
    
    // Update sustainable text
    const sustainableText = document.querySelector('.hero-points + div + div');
    if (sustainableText) sustainableText.innerHTML = `<i data-lucide="leaf" class="h-4 w-4"></i> ${texts[currentLang].hero.sustainable}`;
    
    // Update section titles
    const catalogTitle = document.querySelector('#catalog h2');
    if (catalogTitle) catalogTitle.textContent = texts[currentLang].sections.catalog;
    
    const galleryTitle = document.querySelector('#gallery h2');
    if (galleryTitle) galleryTitle.textContent = texts[currentLang].sections.gallery;
    
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) aboutTitle.textContent = texts[currentLang].sections.about;
    
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = texts[currentLang].sections.contact;
    
    // Update tag labels
    domCache.tagButtons.forEach(btn => {
        const tagKey = btn.dataset.tag;
        const tag = tags.find(t => t.key === tagKey);
        if (tag) btn.textContent = tag.label[currentLang];
    });
    
    // Update catalog item descriptions
    const catalogItems = document.querySelectorAll('#catalog-items .catalog-item');
    if (catalogItems.length >= 8) {
        // Rails
        if (catalogItems[0]) {
            catalogItems[0].querySelector('h3').textContent = texts[currentLang].catalog?.items?.rails?.title || "Перила и ограждения";
            catalogItems[0].querySelector('p').textContent = texts[currentLang].catalog?.items?.rails?.desc || "Нержавеющие перила для интерьера и улицы, проектирование и монтаж.";
        }
        // Stairs
        if (catalogItems[1]) {
            catalogItems[1].querySelector('h3').textContent = texts[currentLang].catalog?.items?.stairs?.title || "Лестницы";
            catalogItems[1].querySelector('p').textContent = texts[currentLang].catalog?.items?.stairs?.desc || "Точные металлические каркасы, ступени из дерева/стекла по выбору.";
        }
        // Canopies
        if (catalogItems[2]) {
            catalogItems[2].querySelector('h3').textContent = texts[currentLang].catalog?.items?.canopies?.title || "Козырьки и навесы";
            catalogItems[2].querySelector('p').textContent = texts[currentLang].catalog?.items?.canopies?.desc || "Элегантная защита от осадков, надежный монтаж.";
        }
        // Tanks
        if (catalogItems[3]) {
            catalogItems[3].querySelector('h3').textContent = texts[currentLang].catalog?.items?.tanks?.title || "Емкости и баки";
            catalogItems[3].querySelector('p').textContent = texts[currentLang].catalog?.items?.tanks?.desc || "Пищевые и технические ёмкости, качественная TIG-сварка.";
        }
        // Furniture
        if (catalogItems[4]) {
            catalogItems[4].querySelector('h3').textContent = texts[currentLang].catalog?.items?.furniture?.title || "Мебель и декор";
            catalogItems[4].querySelector('p').textContent = texts[currentLang].catalog?.items?.furniture?.desc || "Столы, стеллажи, минималистичные кастомные каркасы.";
        }
        // Retail
        if (catalogItems[5]) {
            catalogItems[5].querySelector('h3').textContent = texts[currentLang].catalog?.items?.retail?.title || "Торговое оборудование";
            catalogItems[5].querySelector('p').textContent = texts[currentLang].catalog?.items?.retail?.desc || "Стойки, витрины, бары — прочные и гигиеничные.";
        }
        // Exhaust
        if (catalogItems[6]) {
            catalogItems[6].querySelector('h3').textContent = texts[currentLang].catalog?.items?.exhaust?.title || "Выхлопные системы";
            catalogItems[6].querySelector('p').textContent = texts[currentLang].catalog?.items?.exhaust?.desc || "Кастомные трассы, чистая сварка, точная посадка.";
        }
        // Custom
        if (catalogItems[7]) {
            catalogItems[7].querySelector('h3').textContent = texts[currentLang].catalog?.items?.custom?.title || "Нестандартные конструкции";
            catalogItems[7].querySelector('p').textContent = texts[currentLang].catalog?.items?.custom?.desc || "Изготавливаем по чертежам и эскизам.";
        }
    }
    
    // Update catalog intro
    const catalogIntro = document.querySelector('#catalog p');
    if (catalogIntro) catalogIntro.textContent = texts[currentLang].catalogIntro;
    
    // Update gallery intro
    const galleryIntro = document.querySelector('#gallery p');
    if (galleryIntro) galleryIntro.textContent = texts[currentLang].galleryIntro;
    
    // Update search placeholder
    if (domCache.gallerySearch) domCache.gallerySearch.placeholder = texts[currentLang].search;
    
    // Update about section
    const aboutText = document.querySelector('#about p');
    if (aboutText) aboutText.textContent = texts[currentLang].about.text1;
    
    const aboutBullets = document.querySelectorAll('#about li');
    texts[currentLang].about.bullets.forEach((bullet, i) => {
        if (aboutBullets[i]) aboutBullets[i].innerHTML = `<i data-lucide="check-circle-2" class="h-5 w-5 mt-0.5 text-green-600"></i>${bullet}`;
    });
    
    // Update about photo placeholder text
    const aboutPhotoText = document.querySelector('#about [data-i18n="about.photo.coming"]');
    if (aboutPhotoText) aboutPhotoText.textContent = texts[currentLang].about.photoComing;
    
    // Update testimonials
    const testimonialCards = document.querySelectorAll('#about + section .border');
    texts[currentLang].testimonials.forEach((testimonial, i) => {
        if (testimonialCards[i]) {
            const testimonialText = testimonialCards[i].querySelector('p:first-child');
            if (testimonialText) testimonialText.textContent = `"${testimonial.text}"`;
            
            const testimonialAuthor = testimonialCards[i].querySelector('p:last-child');
            if (testimonialAuthor) testimonialAuthor.textContent = `— ${testimonial.author}`;
        }
    });
    
    // Update FAQ
    const faqItems = document.querySelectorAll('#about + section details');
    texts[currentLang].faq.forEach((faq, i) => {
        if (faqItems[i]) {
            const faqQuestion = faqItems[i].querySelector('summary');
            if (faqQuestion) faqQuestion.textContent = faq.q;
            
            const faqAnswer = faqItems[i].querySelector('p');
            if (faqAnswer) faqAnswer.textContent = faq.a;
        }
    });
    
    // Update contact section
    const contactText = document.querySelector('#contact .md\\:col-span-2 p');
    if (contactText) contactText.textContent = texts[currentLang].contact.text;
    
    const contactSubmitBtn = document.querySelector('#contact button[type="submit"]');
    if (contactSubmitBtn) contactSubmitBtn.textContent = texts[currentLang].cta.getQuote;
    
    const contactCallBtn = document.querySelector('#contact a[href^="tel:"]');
    if (contactCallBtn) contactCallBtn.innerHTML = `<i data-lucide="phone" class="h-4 w-4"></i>${texts[currentLang].cta.call}`;
    
    const contactEmailBtn = document.querySelector('#contact a[href^="mailto:"]');
    if (contactEmailBtn) contactEmailBtn.innerHTML = `<i data-lucide="mail" class="h-4 w-4"></i>${texts[currentLang].cta.email}`;
    
    // Update form placeholders
    if (domCache.contactForm) {
        const formInputs = domCache.contactForm.querySelectorAll('input');
        if (formInputs[0]) formInputs[0].placeholder = texts[currentLang].form.name;
        if (formInputs[1]) formInputs[1].placeholder = texts[currentLang].form.email;
        if (formInputs[2]) formInputs[2].placeholder = texts[currentLang].form.phone;
        
        const formTextarea = domCache.contactForm.querySelector('textarea');
        if (formTextarea) formTextarea.placeholder = texts[currentLang].form.message;
    }
    
    // Update improvements section
    const improvementsTitle = document.querySelector('#contact .rounded-2xl h3');
    if (improvementsTitle) improvementsTitle.innerHTML = `<i data-lucide="info" class="h-5 w-5"></i>${texts[currentLang].sections.improvements}`;
    
    const improvementItems = document.querySelectorAll('#contact .rounded-2xl li');
    texts[currentLang].improvements.forEach((improvement, i) => {
        if (improvementItems[i]) improvementItems[i].innerHTML = `<i data-lucide="check-circle-2" class="h-5 w-5 mt-0.5 text-green-600 flex-none"></i>${improvement}`;
    });
    
    // Update footer
    const footerText = document.querySelector('footer p');
    if (footerText) footerText.innerHTML = `© <span id="current-year">${new Date().getFullYear()}</span> INOX Master — ${texts[currentLang].brand}`;
    
    // Update footer links
    const footerLinks = document.querySelectorAll('footer a');
    if (footerLinks.length >= 3) {
        footerLinks[0].textContent = texts[currentLang].nav.about;
        footerLinks[1].textContent = texts[currentLang].nav.contact;
        footerLinks[2].textContent = "Privacy";
    }
    

}

function updateLanguageUI() {
    // Update language buttons
    domCache.langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('bg-blue-600', 'text-white');
            btn.classList.remove('hover:bg-gray-100');
        } else {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('hover:bg-gray-100');
        }
    });
    
    // Re-render gallery with new language
    renderGallery();
    
    // Recreate icons
    lucide.createIcons();
}

function toggleTagFilter(tag) {
    if (activeTag === tag) {
        activeTag = null;
    } else {
        activeTag = tag;
    }
    
    // Update tag button states
    domCache.tagButtons.forEach(btn => {
        if (btn.dataset.tag === activeTag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    filterAndRenderGallery();
}

function filterAndRenderGallery() {
    filteredPhotos = photos.filter(photo => {
        const matchesTag = !activeTag || photo.tags.includes(activeTag);
        const matchesSearch = !currentSearchQuery || 
            (photo.title[currentLang] + " " + photo.caption[currentLang])
                .toLowerCase()
                .includes(currentSearchQuery.toLowerCase());
        return matchesTag && matchesSearch;
    });
    
    renderGallery();
}

function renderGallery() {
    domCache.galleryGrid.innerHTML = '';
    
    filteredPhotos.forEach((photo, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item group relative rounded-xl overflow-hidden bg-neutral-100';
        galleryItem.onclick = () => openImageModal(index);
        
                 galleryItem.innerHTML = `
             <img src="${photo.src}" alt="${photo.title[currentLang]}" loading="lazy" class="w-full h-40 md:h-44 object-cover">
             <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
             <div class="absolute right-2 bottom-2 flex items-center justify-center bg-white/90 rounded-full w-8 h-8">
                 <i data-lucide="zoom-in" class="h-4 w-4"></i>
             </div>
         `;
        
        domCache.galleryGrid.appendChild(galleryItem);
    });
    
    // Recreate icons for new items
    lucide.createIcons();
}

function openImageModal(index) {
    currentModalIndex = index;
    const photo = filteredPhotos[index];
    
    domCache.modalImage.src = photo.src;
    domCache.modalImage.alt = photo.title[currentLang];
    domCache.modalTitle.textContent = photo.title[currentLang];
    domCache.modalCaption.textContent = photo.caption[currentLang];
    
    // Render tags
    domCache.modalTags.innerHTML = photo.tags.map(tag => {
        const tagInfo = tags.find(t => t.key === tag);
        return `<span class="rounded-full bg-neutral-100 px-2 py-1">${tagInfo ? tagInfo.label[currentLang] : tag}</span>`;
    }).join('');
    
    domCache.imageModal.classList.remove('hidden');
    domCache.imageModal.classList.add('show');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    domCache.imageModal.classList.add('hidden');
    domCache.imageModal.classList.remove('show');
    document.body.style.overflow = '';
}

function showPreviousImage() {
    currentModalIndex = (currentModalIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    openImageModal(currentModalIndex);
}

function showNextImage() {
    currentModalIndex = (currentModalIndex + 1) % filteredPhotos.length;
    openImageModal(currentModalIndex);
}

function handleKeyboard(e) {
    if (domCache.imageModal.classList.contains('hidden')) return;
    
    switch(e.key) {
        case 'Escape':
            closeImageModal();
            break;
        case 'ArrowLeft':
            showPreviousImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Optimized scroll handler with throttling
let scrollTimeout;
function handleScroll() {
    if (scrollTimeout) return; // Throttle scroll events
    
    scrollTimeout = setTimeout(() => {
        const showButton = window.scrollY > 400;
        if (showButton) {
            domCache.backToTop.classList.add('visible');
        } else {
            domCache.backToTop.classList.remove('visible');
        }
        scrollTimeout = null;
    }, 16); // ~60fps
}

function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.phone) {
        alert('Пожалуйста, заполните обязательные поля');
        return;
    }
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    
    // Reset form
    e.target.reset();
}

function initializeAnimations() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded, applying fallback styles');
        return;
    }

    // Check if ScrollTrigger is available
    if (typeof ScrollTrigger === 'undefined') {
        console.warn('ScrollTrigger not loaded, using basic animations');
        return;
    }

    // Hero section animations
    gsap.fromTo('.hero-title', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
    
    gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
    );
    
    gsap.fromTo('.hero-points span', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, stagger: 0.1, ease: 'power2.out' }
    );
    
    gsap.fromTo('.hero-img', 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.3, ease: 'power2.out' }
    );
    
    // Catalog items animation with better error handling
    try {
        const catalogItems = document.querySelectorAll('.catalog-item');
        if (catalogItems.length > 0) {
            // Set initial state to prevent flickering
            gsap.set('.catalog-item', { opacity: 0, y: 30 });
            
            // Wait for next tick to ensure DOM is ready
            setTimeout(() => {
                gsap.from('.catalog-item', {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    delay: 0.2,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#catalog',
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                        onEnter: () => {
                            // Ensure items are visible when entering viewport
                            gsap.set('.catalog-item', { clearProps: 'opacity,y' });
                        },
                        onLeave: () => {
                            // Keep items visible when leaving viewport
                            gsap.set('.catalog-item', { opacity: 1, y: 0 });
                        },
                        onComplete: () => {
                            // Ensure items are fully visible after animation
                            gsap.set('.catalog-item', { opacity: 1, y: 0 });
                            // Add class to mark as animated
                            document.querySelectorAll('.catalog-item').forEach(item => {
                                item.classList.add('animated');
                            });
                        }
                    }
                });
            }, 100);
            
            // Additional safety check - ensure items are visible after a delay
            setTimeout(() => {
                gsap.set('.catalog-item', { opacity: 1, y: 0 });
                // Add class to mark as animated
                document.querySelectorAll('.catalog-item').forEach(item => {
                    item.classList.add('animated');
                });
            }, 2000);
        }
    } catch (error) {
        console.error('Error initializing catalog animations:', error);
        // Fallback: ensure items are visible
        gsap.set('.catalog-item', { opacity: 1, y: 0 });
        // Add class to mark as animated
        document.querySelectorAll('.catalog-item').forEach(item => {
            item.classList.add('animated');
        });
    }
    
    // Gallery animation
    gsap.from('.gallery-item', {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        delay: 0.1,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#gallery',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });
    
    // About section animation
    gsap.from('#about img', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('#about > div > div:last-child', {
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });
}

// Function to disable problematic animations and force visibility
function forceCatalogItemsVisibility() {
    console.log('Forcing catalog items visibility');
    
    // Kill all GSAP animations on catalog items
    if (typeof gsap !== 'undefined') {
        gsap.killTweensOf('.catalog-item');
        gsap.set('.catalog-item', { 
            opacity: 1, 
            y: 0,
            clearProps: 'all'
        });
    }
    
    // Add CSS class to force visibility
    document.body.classList.add('force-visibility');
    
    // Add animated class to all catalog items
    document.querySelectorAll('.catalog-item').forEach(item => {
        item.classList.add('animated');
    });
}

// Export for potential use in other scripts
window.INOXMaster = {
    switchLanguage,
    toggleTagFilter,
    openImageModal,
    closeImageModal,
    texts,
    photos,
    tags,
    forceCatalogItemsVisibility
};
