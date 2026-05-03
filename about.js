// ==================== SKILLS DATA ====================
const skills = [
    { name: "HTML/CSS/JS", icon: "fab fa-html5", level: "Expert", color: "#e34f26" },
    { name: "React", icon: "fab fa-react", level: "Advanced", color: "#61dafb" },
    { name: "Node.js", icon: "fab fa-node-js", level: "Advanced", color: "#339933" },
    { name: "PHP", icon: "fab fa-php", level: "Intermediate", color: "#777bb4" },
    { name: "Python", icon: "fab fa-python", level: "Advanced", color: "#3776ab" },
    { name: "Cyber Security", icon: "fas fa-shield-alt", level: "Expert", color: "#10b981" },
    { name: "Penetration Testing", icon: "fas fa-hacking", level: "Advanced", color: "#ef4444" },
    { name: "Web Security", icon: "fas fa-lock", level: "Expert", color: "#f59e0b" },
    { name: "Docker", icon: "fab fa-docker", level: "Intermediate", color: "#2496ed" },
    { name: "MongoDB", icon: "fas fa-database", level: "Advanced", color: "#47a248" },
    { name: "Git", icon: "fab fa-git-alt", level: "Expert", color: "#f05032" },
    { name: "TypeScript", icon: "fab fa-js", level: "Intermediate", color: "#3178c6" }
];

// ==================== TIMELINE DATA ====================
const timeline = [
    {
        year: "2024 - Present",
        title: "Creator of Aime Modox",
        description: "Building a free courses search engine helping 50K+ developers find quality learning resources."
    },
    {
        year: "2022 - 2024",
        title: "Senior Web Developer & Security Consultant",
        description: "Leading web development projects and conducting security audits for enterprise clients."
    },
    {
        year: "2020 - 2022",
        title: "Full Stack Developer",
        description: "Developed scalable web applications using React, Node.js, and MongoDB."
    },
    {
        year: "2019 - 2020",
        title: "Cyber Security Intern",
        description: "Learned penetration testing and security best practices."
    }
];

// ==================== ACHIEVEMENTS DATA ====================
const achievements = [
    { icon: "🏆", title: "Best Instructor Award", description: "Recognized for outstanding teaching in 2024" },
    { icon: "📚", title: "50K+ Students", description: "Taught over 50,000 students worldwide" },
    { icon: "🔒", title: "Security Certified", description: "CEH, OSCP, and Security+ certified" },
    { icon: "🌟", title: "Open Source Contributor", description: "Contributed to 20+ open source projects" }
];

// ==================== TESTIMONIALS DATA ====================
const testimonials = [
    { name: "Sarah Johnson", role: "Full Stack Developer", text: "Amonus is an amazing instructor! His courses helped me land my first dev job.", avatar: "👩‍💻" },
    { name: "Mohamed Ali", role: "Security Analyst", text: "The cyber security challenges are top-notch. Learned more here than in paid courses!", avatar: "👨‍💻" },
    { name: "Emma Wilson", role: "Data Scientist", text: "Clear explanations and practical examples. Highly recommend!", avatar: "👩‍🔬" }
];

// ==================== PROFILE LINKS ====================
const profileLinks = {
    freelancer: "https://www.freelancer.com/u/Amonus99?sb=t",
    tiktok: "https://www.tiktok.com/@amonusashrf1",
    facebook: "https://www.facebook.com/share/1G2uAmPRUe/",
    instagram: "https://www.instagram.com/amonus25"
};

// ==================== RENDER FUNCTIONS ====================
function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;
    
    grid.innerHTML = skills.map((skill, index) => `
        <div class="skill-card" style="animation: fadeInUp 0.4s ease ${index * 0.03}s both">
            <i class="${skill.icon}" style="color: ${skill.color}; font-size: 2rem;"></i>
            <h3>${skill.name}</h3>
            <div class="skill-level">${skill.level}</div>
        </div>
    `).join("");
}

function renderTimeline() {
    const timelineContainer = document.getElementById("timeline");
    if (!timelineContainer) return;
    
    timelineContainer.innerHTML = timeline.map((item, index) => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-year">${item.year}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join("");
}

function renderAchievements() {
    const grid = document.getElementById("achievementsGrid");
    if (!grid) return;
    
    grid.innerHTML = achievements.map((achievement, index) => `
        <div class="achievement-card" style="animation: fadeInUp 0.4s ease ${index * 0.05}s both">
            <div class="achievement-icon">${achievement.icon}</div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        </div>
    `).join("");
}

function renderTestimonials() {
    const grid = document.getElementById("testimonialsGrid");
    if (!grid) return;
    
    grid.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card" style="animation: fadeInUp 0.4s ease ${index * 0.1}s both">
            <div class="testimonial-avatar">${testimonial.avatar}</div>
            <div class="testimonial-text">"${testimonial.text}"</div>
            <div class="testimonial-name">${testimonial.name}</div>
            <div class="testimonial-title">${testimonial.role}</div>
        </div>
    `).join("");
}

// ==================== MODAL FUNCTIONS ====================
function openContactModal() {
    const modal = document.getElementById("contactModal");
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeContactModal() {
    const modal = document.getElementById("contactModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

function openImageModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeImageModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

function showToast(message, isError = false) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = isError ? "toast error show" : "toast show";
    setTimeout(() => {
        toast.className = "toast";
    }, 3000);
}

// ==================== FORM HANDLER ====================
function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    
    if (!name) {
        showToast("Please enter your name", true);
        return;
    }
    
    if (!email || !email.includes("@")) {
        showToast("Please enter a valid email", true);
        return;
    }
    
    if (!message) {
        showToast("Please enter your message", true);
        return;
    }
    
    showToast(`Thank you ${name}! I'll respond within 24 hours.`);
    document.getElementById("contactForm").reset();
    closeContactModal();
}

// ==================== SOCIAL PROFILE HANDLERS ====================
function setupProfileLinks() {
    // Profile social icons
    const freelancerLink = document.querySelector('.social-icon.freelancer');
    const tiktokLink = document.querySelector('.social-icon.tiktok');
    const facebookLink = document.querySelector('.social-icon.facebook');
    const instagramLink = document.querySelector('.social-icon.instagram');
    
    if (freelancerLink) {
        freelancerLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(profileLinks.freelancer, '_blank');
        });
    }
    
    if (tiktokLink) {
        tiktokLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(profileLinks.tiktok, '_blank');
        });
    }
    
    if (facebookLink) {
        facebookLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(profileLinks.facebook, '_blank');
        });
    }
    
    if (instagramLink) {
        instagramLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(profileLinks.instagram, '_blank');
        });
    }
    
    // Connect cards
    const connectCards = document.querySelectorAll('.connect-card');
    connectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            if (card.classList.contains('freelancer')) {
                window.open(profileLinks.freelancer, '_blank');
            } else if (card.classList.contains('tiktok')) {
                window.open(profileLinks.tiktok, '_blank');
            } else if (card.classList.contains('facebook')) {
                window.open(profileLinks.facebook, '_blank');
            } else if (card.classList.contains('instagram')) {
                window.open(profileLinks.instagram, '_blank');
            }
        });
    });
    
    // Footer social icons
    const footerSocials = document.querySelectorAll('.footer .social-icons a');
    if (footerSocials.length >= 4) {
        footerSocials[0].addEventListener('click', (e) => {
            e.preventDefault();
            window.open(profileLinks.freelancer, '_blank');
        });
        footerSocials[1].addEventListener('click', (e) => {
            e.preventDefault();
            window.open(profileLinks.tiktok, '_blank');
        });
        footerSocials[2].addEventListener('click', (e) => {
            e.preventDefault();
            window.open(profileLinks.facebook, '_blank');
        });
        footerSocials[3].addEventListener('click', (e) => {
            e.preventDefault();
            window.open(profileLinks.instagram, '_blank');
        });
    }
}

// ==================== FREELANCE BANNER ====================
function setupFreelanceBanner() {
    const freelanceBtn = document.querySelector('.freelance-banner .btn-primary');
    if (freelanceBtn) {
        freelanceBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(profileLinks.freelancer, '_blank');
        });
    }
}

// ==================== SCROLL HANDLERS ====================
function setupScrollHandlers() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
    
    const ctaExploreBtn = document.getElementById("ctaExploreBtn");
    if (ctaExploreBtn) {
        ctaExploreBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
    
    const ctaContactBtn = document.getElementById("ctaContactBtn");
    if (ctaContactBtn) {
        ctaContactBtn.addEventListener("click", openContactModal);
    }
    
    const contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
        contactBtn.addEventListener("click", openContactModal);
    }
    
    const projectsBtn = document.getElementById("projectsBtn");
    if (projectsBtn) {
        projectsBtn.addEventListener("click", () => {
            window.open("https://github.com", "_blank");
        });
    }
    
    const resumeBtn = document.getElementById("resumeBtn");
    if (resumeBtn) {
        resumeBtn.addEventListener("click", () => {
            showToast("Resume download started!");
        });
    }
}

// ==================== PREMIUM BUTTON ====================
function setupPremiumButton() {
    const premiumBtn = document.getElementById("premiumBtn");
    if (premiumBtn) {
        premiumBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
}

// ==================== MOBILE MENU ====================
function setupMobileMenu() {
    const menuBtn = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
}

// ==================== PARTICLES BACKGROUND ====================
function createParticles() {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5};
            animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
        `;
        particlesContainer.appendChild(particle);
    }
}

// ==================== IMAGE PROFILE HANDLER ====================
function setupImageHandler() {
    const profileImg = document.getElementById("profileImg");
    if (profileImg) {
        profileImg.addEventListener("click", openImageModal);
    }
}

// ==================== INITIALIZE ====================
function init() {
    renderSkills();
    renderTimeline();
    renderAchievements();
    renderTestimonials();
    setupScrollHandlers();
    setupPremiumButton();
    setupMobileMenu();
    setupImageHandler();
    setupProfileLinks();
    setupFreelanceBanner();
    createParticles();
    
    // Modal close handlers
    const closeModal = document.getElementById("closeModal");
    if (closeModal) closeModal.addEventListener("click", closeContactModal);
    
    const closeImageModalBtn = document.getElementById("closeImageModal");
    if (closeImageModalBtn) closeImageModalBtn.addEventListener("click", closeImageModal);
    
    const contactForm = document.getElementById("contactForm");
    if (contactForm) contactForm.addEventListener("submit", handleContactSubmit);
    
    // Close modals on outside click
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    });
    
    // Add particle animation style
    const style = document.createElement("style");
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(10px); }
            75% { transform: translateY(20px) translateX(-10px); }
        }
    `;
    document.head.appendChild(style);
}

// Start the app
document.addEventListener("DOMContentLoaded", init);