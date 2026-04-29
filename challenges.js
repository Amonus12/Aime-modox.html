// ==================== CHALLENGES DATA ====================
const challenges = [
    {
        id: 1,
        title: "30-Day Python Bootcamp",
        description: "Build 30 Python projects in 30 days. From web scrapers to automation tools.",
        icon: "🐍",
        difficulty: "beginner",
        category: "web",
        xp: 1500,
        participants: 3240,
        daysLeft: 18,
        spotsLeft: 140,
        popular: true
    },
    {
        id: 2,
        title: "Web Security CTF",
        description: "Capture The Flag challenge covering XSS, SQL Injection, and CSRF attacks.",
        icon: "🔐",
        difficulty: "advanced",
        category: "security",
        xp: 2500,
        participants: 1870,
        daysLeft: 7,
        spotsLeft: 15,
        popular: false
    },
    {
        id: 3,
        title: "JavaScript 100 Projects",
        description: "Build 100 JavaScript projects. Master DOM manipulation, APIs, and more.",
        icon: "⚡",
        difficulty: "intermediate",
        category: "web",
        xp: 2000,
        participants: 5120,
        daysLeft: 45,
        spotsLeft: 490,
        popular: true
    },
    {
        id: 4,
        title: "AI Prompt Engineering",
        description: "Master prompt engineering for ChatGPT, Claude, and other AI models.",
        icon: "🤖",
        difficulty: "beginner",
        category: "web",
        xp: 1200,
        participants: 4300,
        daysLeft: 5,
        spotsLeft: 96,
        popular: false
    },
    {
        id: 5,
        title: "Fullstack App Challenge",
        description: "Build a fullstack app with React, Node.js, and MongoDB in 3 weeks.",
        icon: "🚀",
        difficulty: "advanced",
        category: "web",
        xp: 3000,
        participants: 980,
        daysLeft: 21,
        spotsLeft: 53,
        popular: true
    },
    {
        id: 6,
        title: "Network Pentesting",
        description: "Learn ethical hacking with Nmap, Metasploit, and Wireshark.",
        icon: "🛡️",
        difficulty: "intermediate",
        category: "security",
        xp: 1800,
        participants: 2100,
        daysLeft: 12,
        spotsLeft: 90,
        popular: false
    }
];

// ==================== LEADERBOARD DATA ====================
const leaderboardData = {
    weekly: [
        { name: "Rania_Dev", country: "Egypt", xp: 4800, avatar: "👩‍💻" },
        { name: "CodeKing", country: "South Africa", xp: 4350, avatar: "👨‍💻" },
        { name: "ByteWizard", country: "Germany", xp: 3900, avatar: "🧙" },
        { name: "SohagHacker", country: "Egypt", xp: 3750, avatar: "⚡" },
        { name: "NanoScript", country: "India", xp: 3400, avatar: "🔥" },
        { name: "CyberNova", country: "Brazil", xp: 3100, avatar: "🛡️" },
        { name: "PythonPro", country: "Mexico", xp: 2950, avatar: "🐍" },
        { name: "DevStorm", country: "USA", xp: 2800, avatar: "🚀" }
    ],
    monthly: [
        { name: "MegaCoder", country: "Japan", xp: 15200, avatar: "💻" },
        { name: "SohagTeam", country: "Egypt", xp: 14800, avatar: "🎯" },
        { name: "CyberKing", country: "Saudi", xp: 13500, avatar: "🔐" },
        { name: "WebNinja", country: "India", xp: 12800, avatar: "🥷" },
        { name: "AlgoQueen", country: "France", xp: 11200, avatar: "👑" }
    ],
    alltime: [
        { name: "MegaCoder", country: "Japan", xp: 48200, avatar: "💻" },
        { name: "SohagTeam", country: "Egypt", xp: 45600, avatar: "🎯" },
        { name: "CyberKing", country: "Saudi Arabia", xp: 41000, avatar: "🔐" },
        { name: "WebNinja", country: "India", xp: 38900, avatar: "🥷" },
        { name: "AlgoQueen", country: "France", xp: 36000, avatar: "👑" }
    ]
};

// ==================== UPCOMING CHALLENGES ====================
const upcomingChallenges = [
    { name: "React Mastery Challenge", date: "May 15, 2025", daysLeft: 12 },
    { name: "DevOps Bootcamp", date: "May 22, 2025", daysLeft: 19 },
    { name: "Cloud Computing Sprint", date: "June 1, 2025", daysLeft: 29 }
];

// ==================== BADGES DATA ====================
const badges = [
    { icon: "🔥", name: "First Flame", desc: "Complete first challenge", locked: false },
    { icon: "⚡", name: "Speed Demon", desc: "Complete in 3 days", locked: true },
    { icon: "🏆", name: "Champion", desc: "Top 10 leaderboard", locked: true },
    { icon: "💯", name: "Perfectionist", desc: "100% score", locked: true },
    { icon: "🐍", name: "Python Master", desc: "Complete Python track", locked: false },
    { icon: "🛡️", name: "Security Expert", desc: "Complete security", locked: true }
];

// ==================== USER STATE ====================
let userProgress = {
    xp: 0,
    maxXp: 500,
    challengesCompleted: 0,
    badges: 1,
    streak: 0,
    hoursSpent: 0
};

let currentFilter = "all";
let currentTab = "weekly";
let currentView = "grid";
let displayedChallenges = 6;

// ==================== HELPER FUNCTIONS ====================
function showToast(message, isError = false) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = isError ? "toast error show" : "toast show";
    setTimeout(() => {
        toast.className = "toast";
    }, 3000);
}

function updateUserUI() {
    document.getElementById("xpDisplay").textContent = `${userProgress.xp} / ${userProgress.maxXp} XP`;
    document.getElementById("xpProgress").style.width = `${(userProgress.xp / userProgress.maxXp) * 100}%`;
    document.getElementById("challengesDone").textContent = userProgress.challengesCompleted;
    document.getElementById("badgesEarned").textContent = userProgress.badges;
    document.getElementById("streakCount").textContent = userProgress.streak;
    document.getElementById("hoursSpent").textContent = userProgress.hoursSpent;
}

function addXP(amount) {
    userProgress.xp += amount;
    userProgress.challengesCompleted++;
    userProgress.streak++;
    userProgress.hoursSpent += 2;
    
    // Award badges based on progress
    if (userProgress.challengesCompleted === 1 && userProgress.badges === 1) {
        userProgress.badges = 2;
        showToast("🎉 Badge Unlocked: First Flame!");
        renderBadges();
    } else if (userProgress.challengesCompleted === 3 && userProgress.badges === 2) {
        userProgress.badges = 3;
        showToast("🏆 Badge Unlocked: Challenge Master!");
        renderBadges();
    }
    
    // Level up
    while (userProgress.xp >= userProgress.maxXp) {
        userProgress.xp -= userProgress.maxXp;
        userProgress.maxXp = Math.floor(userProgress.maxXp * 1.5);
        showToast("🎊 Level Up! You've reached a new level!");
    }
    
    updateUserUI();
}

// ==================== RENDER CHALLENGES ====================
function renderChallenges() {
    const grid = document.getElementById("challengesGrid");
    if (!grid) return;
    
    let filtered = [...challenges];
    if (currentFilter !== "all") {
        filtered = challenges.filter(c => 
            c.difficulty === currentFilter || c.category === currentFilter
        );
    }
    
    const count = document.getElementById("challengeCount");
    if (count) count.textContent = `${filtered.length} challenges`;
    
    const displayChallenges = filtered.slice(0, displayedChallenges);
    
    if (displayChallenges.length === 0) {
        grid.innerHTML = `<div style="text-align: center; padding: 3rem; color: var(--text-muted); grid-column: 1/-1;">No challenges found. Try another filter.</div>`;
        return;
    }
    
    grid.innerHTML = displayChallenges.map((challenge, index) => `
        <div class="challenge-card" style="animation-delay: ${index * 0.05}s">
            <div class="card-header">
                <div class="challenge-icon">${challenge.icon}</div>
                <span class="difficulty ${challenge.difficulty}">${challenge.difficulty}</span>
            </div>
            <h3>${challenge.title}</h3>
            <p>${challenge.description}</p>
            <div class="card-meta">
                <div class="meta-item"><i class="fas fa-users"></i> ${challenge.participants.toLocaleString()} joined</div>
                <div class="meta-item"><i class="fas fa-calendar"></i> ${challenge.daysLeft} days left</div>
                <div class="meta-item"><i class="fas fa-ticket-alt"></i> ${challenge.spotsLeft} spots left</div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="xp-reward"><i class="fas fa-star"></i> +${challenge.xp.toLocaleString()} XP</div>
                <button class="join-btn" onclick="openJoinModal(${challenge.id})">Join Now →</button>
            </div>
        </div>
    `).join("");
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedChallenges >= filtered.length ? "none" : "block";
    }
}

function loadMoreChallenges() {
    displayedChallenges += 3;
    renderChallenges();
}

// ==================== RENDER LEADERBOARD ====================
function renderLeaderboard() {
    const list = document.getElementById("leaderboardList");
    if (!list) return;
    
    const data = leaderboardData[currentTab];
    const medals = ["🥇", "🥈", "🥉"];
    
    list.innerHTML = data.map((user, index) => `
        <div class="lb-item">
            <div class="lb-rank rank-${index + 1}">${medals[index] || (index + 1)}</div>
            <div class="lb-avatar">${user.avatar}</div>
            <div class="lb-info">
                <div class="lb-name">${user.name}</div>
                <div class="lb-country">${user.country}</div>
            </div>
            <div class="lb-xp">${user.xp.toLocaleString()} XP</div>
        </div>
    `).join("");
}

// ==================== RENDER UPCOMING ====================
function renderUpcoming() {
    const list = document.getElementById("upcomingList");
    if (!list) return;
    
    list.innerHTML = upcomingChallenges.map(upcoming => `
        <div class="upcoming-item">
            <div class="upcoming-dot"></div>
            <div class="upcoming-info">
                <div class="upcoming-name">${upcoming.name}</div>
                <div class="upcoming-date">${upcoming.date}</div>
            </div>
            <div class="upcoming-countdown">${upcoming.daysLeft} days</div>
        </div>
    `).join("");
}

// ==================== RENDER BADGES ====================
function renderBadges() {
    const grid = document.getElementById("badgesGrid");
    if (!grid) return;
    
    const earnedCount = badges.filter(b => !b.locked).length;
    grid.innerHTML = badges.slice(0, 6).map(badge => `
        <div class="badge-card ${badge.locked ? 'locked' : ''}">
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-desc">${badge.desc}</div>
        </div>
    `).join("");
}

// ==================== FILTER HANDLERS ====================
function setupFilters() {
    const filters = document.querySelectorAll(".filter-btn");
    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(f => f.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            displayedChallenges = 6;
            renderChallenges();
        });
    });
}

function setupTabs() {
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentTab = tab.dataset.tab;
            renderLeaderboard();
        });
    });
}

function setupSortButtons() {
    const sortByXp = document.getElementById("sortByXp");
    if (sortByXp) {
        sortByXp.addEventListener("click", () => {
            challenges.sort((a, b) => b.xp - a.xp);
            renderChallenges();
            showToast("Sorted by XP (highest first)");
        });
    }
    
    const sortByPopular = document.getElementById("sortByPopular");
    if (sortByPopular) {
        sortByPopular.addEventListener("click", () => {
            challenges.sort((a, b) => b.participants - a.participants);
            renderChallenges();
            showToast("Sorted by popularity");
        });
    }
}

function setupViewButtons() {
    const gridView = document.getElementById("gridViewBtn");
    const listView = document.getElementById("listViewBtn");
    const grid = document.getElementById("challengesGrid");
    
    if (gridView) {
        gridView.addEventListener("click", () => {
            currentView = "grid";
            grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(350px, 1fr))";
            showToast("Grid view activated");
        });
    }
    
    if (listView) {
        listView.addEventListener("click", () => {
            currentView = "list";
            grid.style.gridTemplateColumns = "1fr";
            showToast("List view activated");
        });
    }
}

// ==================== MODAL FUNCTIONS ====================
function openJoinModal(challengeId = null) {
    const modal = document.getElementById("joinModal");
    const select = document.getElementById("challengeSelect");
    
    if (select) {
        select.innerHTML = '<option value="">Select a challenge</option>' + 
            challenges.map(c => `<option value="${c.id}" ${c.id === challengeId ? "selected" : ""}>${c.title} (+${c.xp} XP)</option>`).join("");
    }
    
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeJoinModal() {
    const modal = document.getElementById("joinModal");
    modal.style.display = "none";
    document.body.style.overflow = "";
}

function handleJoinSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const challengeId = document.getElementById("challengeSelect").value;
    
    if (!name) {
        showToast("Please enter your name", true);
        return;
    }
    
    if (!email || !email.includes("@")) {
        showToast("Please enter a valid email", true);
        return;
    }
    
    if (!challengeId) {
        showToast("Please select a challenge", true);
        return;
    }
    
    const challenge = challenges.find(c => c.id == challengeId);
    if (challenge) {
        addXP(challenge.xp);
        showToast(`🎉 Welcome ${name}! You've joined "${challenge.title}" and earned ${challenge.xp} XP!`);
    }
    
    closeJoinModal();
    document.getElementById("joinForm").reset();
}

// ==================== SHARE MODAL ====================
function openShareModal() {
    const modal = document.getElementById("shareModal");
    modal.style.display = "flex";
}

function closeShareModal() {
    const modal = document.getElementById("shareModal");
    modal.style.display = "none";
}

// ==================== SCROLL HANDLERS ====================
function setupScrollHandlers() {
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            document.querySelector(".challenges-section").scrollIntoView({ behavior: "smooth" });
        });
    }
    
    const leaderboardBtn = document.getElementById("leaderboardBtn");
    if (leaderboardBtn) {
        leaderboardBtn.addEventListener("click", () => {
            document.getElementById("leaderboard").scrollIntoView({ behavior: "smooth" });
        });
    }
    
    const howItWorksBtn = document.getElementById("howItWorksBtn");
    if (howItWorksBtn) {
        howItWorksBtn.addEventListener("click", () => {
            document.getElementById("howItWorks").scrollIntoView({ behavior: "smooth" });
        });
    }
    
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

// ==================== QUICK ACTION BUTTONS ====================
function setupQuickActions() {
    const quickJoin = document.getElementById("quickJoinBtn");
    if (quickJoin) quickJoin.addEventListener("click", () => openJoinModal());
    
    const quickRanking = document.getElementById("quickRankingBtn");
    if (quickRanking) quickRanking.addEventListener("click", () => {
        document.getElementById("leaderboard").scrollIntoView({ behavior: "smooth" });
    });
    
    const quickBadges = document.getElementById("quickBadgesBtn");
    if (quickBadges) quickBadges.addEventListener("click", () => {
        document.getElementById("badges").scrollIntoView({ behavior: "smooth" });
    });
    
    const quickShare = document.getElementById("quickShareBtn");
    if (quickShare) quickShare.addEventListener("click", () => openShareModal());
    
    const quickStats = document.getElementById("quickStatsBtn");
    if (quickStats) quickStats.addEventListener("click", () => {
        showToast("You have completed " + userProgress.challengesCompleted + " challenges!");
    });
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

// ==================== NOTIFICATION BUTTON ====================
function setupNotificationButton() {
    const notifBtn = document.getElementById("notificationBtn");
    if (notifBtn) {
        notifBtn.addEventListener("click", () => {
            showToast("🔔 You have 3 new challenges available!");
        });
    }
}

// ==================== LOAD MORE ====================
function setupLoadMore() {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", loadMoreChallenges);
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

// ==================== INITIALIZE ====================
function init() {
    renderChallenges();
    renderLeaderboard();
    renderUpcoming();
    renderBadges();
    updateUserUI();
    
    setupFilters();
    setupTabs();
    setupSortButtons();
    setupViewButtons();
    setupScrollHandlers();
    setupQuickActions();
    setupPremiumButton();
    setupNotificationButton();
    setupLoadMore();
    setupMobileMenu();
    createParticles();
    
    // Modal close handlers
    const closeModal = document.getElementById("closeModal");
    if (closeModal) closeModal.addEventListener("click", closeJoinModal);
    
    const closeShareModal = document.getElementById("closeShareModal");
    if (closeShareModal) closeShareModal.addEventListener("click", closeShareModal);
    
    const joinForm = document.getElementById("joinForm");
    if (joinForm) joinForm.addEventListener("submit", handleJoinSubmit);
    
    const joinFromStats = document.getElementById("joinFromStats");
    if (joinFromStats) joinFromStats.addEventListener("click", () => openJoinModal());
    
    const shareProgress = document.getElementById("shareProgress");
    if (shareProgress) shareProgress.addEventListener("click", openShareModal);
    
    const ctaJoinBtn = document.getElementById("ctaJoinBtn");
    if (ctaJoinBtn) ctaJoinBtn.addEventListener("click", () => openJoinModal());
    
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