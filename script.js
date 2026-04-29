// ==================== COURSES DATABASE ====================
const coursesDB = {
    python: [
        { title: "Python for Everybody - Coursera", url: "https://www.coursera.org/learn/python", desc: "University of Michigan — FREE audit available", rating: "4.9", students: "2.5M" },
        { title: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/", desc: "Complete book + videos FREE", rating: "4.8", students: "1.2M" },
        { title: "freeCodeCamp Python", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/", desc: "Certification + 20 projects", rating: "4.7", students: "890K" },
        { title: "Python Crash Course", url: "https://ehmatthes.github.io/pcc_2e/", desc: "FREE book chapters", rating: "4.9", students: "450K" },
        { title: "Real Python Tutorials", url: "https://realpython.com/tutorials/basics/", desc: "200+ FREE tutorials", rating: "4.8", students: "1.1M" }
    ],
    javascript: [
        { title: "freeCodeCamp JavaScript", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", desc: "400+ hours FREE certification", rating: "4.9", students: "1.8M" },
        { title: "JavaScript.info", url: "https://javascript.info/", desc: "Modern JS complete guide", rating: "4.8", students: "2.1M" },
        { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/", desc: "Interactive book FREE", rating: "4.7", students: "980K" },
        { title: "You Don't Know JS", url: "https://github.com/getify/You-Dont-Know-JS", desc: "6 FREE books series", rating: "4.9", students: "1.5M" },
        { title: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", desc: "Official documentation", rating: "4.8", students: "3.2M" }
    ],
    react: [
        { title: "React Official Tutorial", url: "https://react.dev/learn", desc: "Complete official documentation", rating: "4.9", students: "2.8M" },
        { title: "Scrimba React Course", url: "https://scrimba.com/learn/learnreact", desc: "Interactive FREE course", rating: "4.8", students: "620K" },
        { title: "freeCodeCamp React", url: "https://www.freecodecamp.org/news/free-react-course-2022/", desc: "Modern React tutorial", rating: "4.7", students: "890K" }
    ],
    ai: [
        { title: "fast.ai Practical Deep Learning", url: "https://course.fast.ai/", desc: "Complete AI course FREE", rating: "4.9", students: "450K" },
        { title: "Deep Learning Specialization", url: "https://www.coursera.org/specializations/deep-learning", desc: "Andrew Ng FREE audit", rating: "4.9", students: "1.9M" },
        { title: "Hugging Face Course", url: "https://huggingface.co/course/chapter1/1", desc: "Transformers & NLP FREE", rating: "4.8", students: "340K" }
    ],
    cyber: [
        { title: "TryHackMe FREE Rooms", url: "https://tryhackme.com/", desc: "150+ FREE hacking labs", rating: "4.9", students: "1.2M" },
        { title: "HackTheBox Academy", url: "https://academy.hackthebox.com/", desc: "FREE modules & labs", rating: "4.8", students: "890K" },
        { title: "Cybrary Security+", url: "https://www.cybrary.it/course/security-plus/", desc: "CompTIA Security+ FREE", rating: "4.7", students: "560K" }
    ],
    web: [
        { title: "The Odin Project", url: "https://www.theodinproject.com/", desc: "Fullstack curriculum FREE", rating: "4.9", students: "1.5M" },
        { title: "freeCodeCamp Responsive Web", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/", desc: "HTML/CSS/JS certification", rating: "4.8", students: "2.1M" }
    ]
};

// Services Data
const servicesData = [
    { icon: "fas fa-code", title: "Programming Courses", desc: "Python, JS, Java, C++ & 50+ languages", category: "python", color: "#5f7ef2" },
    { icon: "fas fa-brain", title: "AI & Machine Learning", desc: "ChatGPT, TensorFlow, NLP, Computer Vision", category: "ai", color: "#a855f7" },
    { icon: "fas fa-shield-alt", title: "Cyber Security", desc: "Hacking, Pentesting, CTF, Security+", category: "cyber", color: "#2bd9c6" },
    { icon: "fas fa-globe", title: "Web Development", desc: "HTML, CSS, JS, React, Node.js", category: "web", color: "#ff9460" },
    { icon: "fas fa-database", title: "Data Science", desc: "SQL, Pandas, Power BI, Tableau", category: "python", color: "#f26c8f" },
    { icon: "fas fa-mobile-alt", title: "Mobile Development", desc: "Flutter, React Native, Swift", category: "javascript", color: "#00d9ff" }
];

// Categories Data
const categoriesData = [
    { name: "Python", icon: "🐍", count: "2,500+", category: "python", color: "#3776ab" },
    { name: "JavaScript", icon: "⚡", count: "3,200+", category: "javascript", color: "#f7df1e" },
    { name: "React", icon: "⚛️", count: "1,800+", category: "react", color: "#61dafb" },
    { name: "AI/ML", icon: "🧠", count: "1,200+", category: "ai", color: "#ff6b6b" },
    { name: "Cyber Security", icon: "🛡️", count: "2,100+", category: "cyber", color: "#00d4aa" },
    { name: "Web Dev", icon: "🌐", count: "4,500+", category: "web", color: "#4ecdc4" },
    { name: "Data Science", icon: "📊", count: "950+", category: "python", color: "#ff9f43" },
    { name: "Mobile Dev", icon: "📱", count: "1,300+", category: "javascript", color: "#764ba2" }
];

// Testimonials Data
const testimonialsData = [
    { name: "Sarah Johnson", role: "Full Stack Developer", text: "This platform changed my life! Found amazing free resources that helped me land my dream job.", avatar: "👩‍💻", rating: 5 },
    { name: "Mohamed Ali", role: "Cyber Security Analyst", text: "The cyber security challenges are incredible. Learned more here than in paid courses!", avatar: "👨‍💻", rating: 5 },
    { name: "Emma Wilson", role: "Data Scientist", text: "Best resource hub for developers. Constantly updated with high-quality content.", avatar: "👩‍🔬", rating: 5 }
];

// ==================== GLOBAL STATE ====================
let isLoggedIn = false;

// ==================== HELPER FUNCTIONS ====================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2bd9c6' : type === 'error' ? '#f26c8f' : '#5f7ef2'};
        color: ${type === 'success' ? '#0a0c15' : 'white'};
        padding: 12px 24px;
        border-radius: 50px;
        font-weight: 500;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        animation: slideInRight 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== RENDER FUNCTIONS ====================
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    
    grid.innerHTML = servicesData.map((service, index) => `
        <div class="service-card" data-category="${service.category}" style="animation: fadeInUp 0.4s ease ${index * 0.05}s both">
            <i class="${service.icon}" style="color: ${service.color}"></i>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        </div>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            document.getElementById('searchInput').value = category;
            document.getElementById('categorySelect').value = category;
            searchCourses();
            // Scroll to search section
            document.querySelector('.search-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    
    grid.innerHTML = categoriesData.map((category, index) => `
        <div class="category-card" data-category="${category.category}" style="animation: fadeInUp 0.4s ease ${index * 0.03}s both">
            <div class="category-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>${category.count} resources</p>
        </div>
    `).join('');
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            document.getElementById('searchInput').value = category;
            document.getElementById('categorySelect').value = category;
            searchCourses();
            document.querySelector('.search-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    
    grid.innerHTML = testimonialsData.map((testimonial, index) => `
        <div class="testimonial-card" style="animation: fadeInUp 0.4s ease ${index * 0.1}s both">
            <div class="testimonial-avatar">${testimonial.avatar}</div>
            <div class="testimonial-text">"${testimonial.text}"</div>
            <div class="testimonial-name">${testimonial.name}</div>
            <div class="testimonial-title">${testimonial.role}</div>
            <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
        </div>
    `).join('');
}

// ==================== SEARCH FUNCTION ====================
function searchCourses() {
    if (!isLoggedIn) {
        showNotification('🔒 Login required to access resources! Password: sohagteam', 'error');
        openLoginModal();
        return;
    }
    
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const category = document.getElementById('categorySelect').value;
    const container = document.getElementById('resultsContainer');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!query && category === 'all') {
        container.innerHTML = `<div class="result-placeholder">
            <i class="fas fa-search"></i>
            <p>Enter a search term (python, react, cyber security...)</p>
        </div>`;
        if (resultsCount) resultsCount.textContent = '';
        return;
    }
    
    // Show loading animation
    container.innerHTML = `<div class="result-card loading">
        <strong>Searching...</strong>
        <p>Finding the best resources for you</p>
    </div>`;
    
    setTimeout(() => {
        let results = [];
        
        for (let key in coursesDB) {
            if (category !== 'all' && key !== category) continue;
            const matched = coursesDB[key].filter(course => 
                course.title.toLowerCase().includes(query) || 
                course.desc.toLowerCase().includes(query) ||
                key.includes(query)
            );
            results.push(...matched);
        }
        
        if (results.length === 0) {
            container.innerHTML = `<div class="result-placeholder">
                <i class="fas fa-frown"></i>
                <p>No results for "${query}"</p>
                <p style="font-size: 0.8rem">Try: Python, React, JavaScript, or Cyber Security</p>
            </div>`;
            if (resultsCount) resultsCount.textContent = '';
            return;
        }
        
        if (resultsCount) resultsCount.textContent = `${results.length} resources found`;
        
        container.innerHTML = results.map((course, index) => `
            <div class="result-card" style="animation: fadeInUp 0.4s ease ${index * 0.03}s both">
                <strong>
                    <i class="fas fa-book-open"></i> 
                    ${course.title}
                </strong>
                <p>${course.desc}</p>
                <div style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.75rem; color: var(--text-muted)">
                    <span><i class="fas fa-star" style="color: #feca57"></i> ${course.rating || '4.8'}</span>
                    <span><i class="fas fa-users"></i> ${course.students || '100K+'}</span>
                </div>
                <a href="${course.url}" target="_blank" rel="noopener noreferrer">
                    Access Resource <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `).join('');
    }, 600);
}

// ==================== LOGIN MODAL ====================
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!email) {
        showNotification('❌ Please enter your email address', 'error');
        return;
    }
    
    if (password === 'sohagteam') {
        isLoggedIn = true;
        closeLoginModal();
        const premiumBanner = document.getElementById('premiumBanner');
        if (premiumBanner) premiumBanner.style.display = 'block';
        showNotification('🎉 Premium access unlocked! Welcome to Aime Modox.', 'success');
        searchCourses();
        document.getElementById('loginPassword').value = '';
        
        // Auto-hide premium banner after 5 seconds
        setTimeout(() => {
            if (premiumBanner) premiumBanner.style.display = 'none';
        }, 5000);
    } else {
        showNotification('❌ Wrong password! Hint: sohagteam', 'error');
        document.getElementById('loginPassword').value = '';
        document.getElementById('loginPassword').focus();
    }
}

// ==================== PREMIUM BANNER CLOSE ====================
function closePremiumBanner() {
    const banner = document.getElementById('premiumBanner');
    if (banner) banner.style.display = 'none';
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.toggle('active');
}

// ==================== CUSTOM CURSOR ====================
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    if (!cursor || !cursorDot) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform += ' scale(0.8)';
        cursorDot.style.transform += ' scale(1.5)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '');
        cursorDot.style.transform = cursorDot.style.transform.replace(' scale(1.5)', '');
    });
    
    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .service-card, .category-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(1.5)';
            cursor.style.borderColor = 'var(--secondary)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            cursor.style.borderColor = 'var(--primary)';
        });
    });
}

// ==================== ANIMATION ON SCROLL ====================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .category-card, .feature-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
}

// ==================== EVENT LISTENERS ====================
function initEventListeners() {
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) searchBtn.addEventListener('click', searchCourses);
    
    // Enter key on search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchCourses();
        });
    }
    
    // Category filter change
    const categorySelect = document.getElementById('categorySelect');
    if (categorySelect) {
        categorySelect.addEventListener('change', () => {
            if (isLoggedIn) searchCourses();
        });
    }
    
    // Login button
    const loginNavBtn = document.getElementById('loginNavBtn');
    if (loginNavBtn) loginNavBtn.addEventListener('click', openLoginModal);
    
    const placeholderLoginBtn = document.getElementById('placeholderLoginBtn');
    if (placeholderLoginBtn) placeholderLoginBtn.addEventListener('click', openLoginModal);
    
    // Hero search button
    const heroSearchBtn = document.getElementById('heroSearchBtn');
    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', () => {
            if (!isLoggedIn) openLoginModal();
            else searchCourses();
        });
    }
    
    // Modal buttons
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeLoginModal);
    
    const closePremiumBtn = document.getElementById('closePremiumBtn');
    if (closePremiumBtn) closePremiumBtn.addEventListener('click', closePremiumBanner);
    
    // Close modal on outside click
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeLoginModal();
        });
    }
    
    // Mobile menu button
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);
}

// ==================== INITIALIZE ====================
function init() {
    renderServices();
    renderCategories();
    renderTestimonials();
    initEventListeners();
    initCustomCursor();
    initScrollAnimations();
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        .notification {
            font-family: 'Inter', sans-serif;
            z-index: 1000;
        }
        .result-card.loading {
            background: linear-gradient(90deg, var(--bg-card) 25%, rgba(255,255,255,0.05) 50%, var(--bg-card) 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
    `;
    document.head.appendChild(style);
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);