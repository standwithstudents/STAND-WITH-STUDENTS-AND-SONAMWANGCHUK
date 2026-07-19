/**
 * ====================================================================
 * THE SOVEREIGN VOICE - EXECUTIVE MOBILIZATION ENGINE
 * Core Architecture Logic Baseline & Animation Matrix (Version 2.0)
 * Framework Year: 2026
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. ACTIVE PAGE INITIALIZATION LOADER DISMISSAL
    // ==========================================
    const pageLoader = document.getElementById("page-loader-curtain");
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.style.opacity = "0";
            setTimeout(() => {
                pageLoader.style.display = "none";
                initializeCounterNumericalHeartbeat();
            }, 400);
        }, 600);
    }

    // ==========================================
    // 2. NAVIGATION HIGHLIGHT ROUTE SCROLLER
    // ==========================================
    const routingLinks = document.querySelectorAll(".nav-link-item");
    const operationalSections = document.querySelectorAll("section, article, main");

    window.addEventListener("scroll", () => {
        let currentActiveSectionId = "";
        operationalSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 220)) {
                currentActiveSectionId = section.getAttribute("id");
            }
        });

        routingLinks.forEach(link => {
            link.classList.remove("active-route");
            if (link.getAttribute("href") === `#${currentActiveSectionId}`) {
                link.classList.add("active-route");
            }
        });
    });

    // ==========================================
    // 3. SCROLL-DRIVEN REVEAL INTERSECTIONS
    // ==========================================
    const elementsToReveal = document.querySelectorAll(".reveal-on-scroll");
    const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-fade");
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    elementsToReveal.forEach(el => scrollRevealObserver.observe(el));

    // ==========================================
    // 4. ANIMATED HIGH-SPEED COUNTER ENGINE
    // ==========================================
    function initializeCounterNumericalHeartbeat() {
        const counterNodes = document.querySelectorAll("[data-target-count]");
        counterNodes.forEach(node => {
            const ceilingValue = parseInt(node.getAttribute("data-target-count"), 10);
            const cycleDuration = 1500; 
            const framesPerSecond = 60;
            const totalTicks = (cycleDuration / 1000) * framesPerSecond;
            const absoluteStepIncrement = Math.ceil(ceilingValue / totalTicks);
            
            let runningCount = 0;
            const tickerLoopTimer = setInterval(() => {
                runningCount += absoluteStepIncrement;
                if (runningCount >= ceilingValue) {
                    node.textContent = ceilingValue.toLocaleString('en-IN');
                    clearInterval(tickerLoopTimer);
                } else {
                    node.textContent = runningCount.toLocaleString('en-IN');
                }
            }, 1000 / framesPerSecond);
        });
    }

    // ==========================================
    // 5. BACK TO TOP CONTROL LOGIC
    // ==========================================
    const bttButton = document.getElementById("backToTopTrigger");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            bttButton.classList.add("active-btt");
        } else {
            bttButton.classList.remove("active-btt");
        }
    });
    if (bttButton) {
        bttButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ==========================================
    // 6. SYSTEM CHRONOGRAPH HEARTBEAT LOOP
    // ==========================================
    const chronoDateEl = document.getElementById("liveChronoDate");
    const chronoTimeEl = document.getElementById("liveChronoTime");

    function runSystemChronograph() {
        const now = new Date();
        const dateOptions = { year: 'numeric', month: 'short', day: '2-digit' };
        if (chronoDateEl) chronoDateEl.textContent = now.toLocaleDateString('en-US', dateOptions);

        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
        if (chronoTimeEl) chronoTimeEl.textContent = formattedTime;
    }
    runSystemChronograph();
    setInterval(runSystemChronograph, 1000);

    // ==========================================
    // 7. SOCIAL HOOK LINKS SHARE INTERFACE
    // ==========================================
    const whatsappAnchor = document.getElementById("whatsappShareBtn");
    const instagramAnchor = document.getElementById("instagramShareBtn");
    const crossPlatformSharePayload = "Join 'The Sovereign Voice' National Movement demanding full systemic education accountability and infrastructural reforms. Stand with India's students: ";
    
    if (whatsappAnchor) {
        whatsappAnchor.addEventListener("click", function() {
            const dynamicRouteUri = encodeURIComponent(window.location.href);
            this.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(crossPlatformSharePayload)}${dynamicRouteUri}`;
        });
    }
    if (instagramAnchor) {
        instagramAnchor.addEventListener("click", function(e) {
            e.preventDefault();
            navigator.clipboard.writeText(`${crossPlatformSharePayload} ${window.location.href}`);
            alert("Movement link copied to clipboard! Share it on your Instagram Story or DMs.");
            window.open("https://instagram.com", "_blank");
        });
    }

    // ==========================================
    // 8. ANTHEM CORE AUDIO DEPLOYMENT CONTROLS
    // ==========================================
    const anthemAudio = document.getElementById("anthemAudioPlayer");
    const progressBar = document.getElementById("audio-progress-bar");
    const currentTimeText = document.getElementById("current-time");

    window.handleAnthemPlay = () => { if (anthemAudio) anthemAudio.play().catch(err => console.log(err)); };
    window.handleAnthemPause = () => { if (anthemAudio) anthemAudio.pause(); };

    if (anthemAudio) {
        anthemAudio.addEventListener("timeupdate", () => {
            const current = anthemAudio.currentTime;
            const duration = anthemAudio.duration || 52;
            if (progressBar) progressBar.style.width = `${(current / duration) * 100}%`;
            if (currentTimeText) {
                const mins = Math.floor(current / 60);
                const secs = Math.floor(current % 60);
                currentTimeText.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            }
        });
    }

    // ==========================================
    // 9. TIMELINE FEED DESIGN INJECTION
    // ==========================================
    const newsTimelineTarget = document.getElementById("newsTimelineTarget");
    const liveCampaignTimelineStream = [
        { status: "Critical Update", bg: "rgba(255,153,51,0.15)", color: "#ff9933", title: "Sonam Wangchuk Pushes Fast Ahead of March", text: "Despite heavy security management adjustments, Wangchuk states the July 20 Parliament March stands firm for educational framework values." },
        { status: "Developing", bg: "rgba(255,255,255,0.06)", color: "#ffffff", title: "Night Vigil Confirmed at Assembling Zones", text: "Abhijeet Dipke and citizen clusters report thousands arriving across strategic routes to secure peaceful advocacy alignment panels." },
        { status: "Manifesto Focus", bg: "rgba(19,136,8,0.15)", color: "#138808", title: "Senior Academic Alliance Demands Overhaul", text: "Prominent research professors release an open manifesto letter requesting complete accountability structural transparency." }
    ];

    if (newsTimelineTarget) {
        newsTimelineTarget.innerHTML = liveCampaignTimelineStream.map(item => `
            <div class="timeline-node-event">
                <div class="timeline-node-dot"></div>
                <div class="timeline-node-body">
                    <span class="timeline-node-tag" style="background:${item.bg}; color:${item.color};">${item.status}</span>
                    <h4 style="font-size:0.85rem; color:#fff; font-weight:700; margin:3px 0;">${item.title}</h4>
                    <p style="font-size:0.75rem; color:#94a3b8; margin:0; line-height:1.4;">${item.text}</p>
                </div>
            </div>
        `).join('');
    }
});

// ==========================================
// 10. FAQ ACCORDION PATTERN TOGGLE CONTROLLER
// ==========================================
window.toggleFaqAccordion = (headerElement) => {
    const parentItem = headerElement.parentElement;
    const contentPane = parentItem.querySelector(".faq-accordion-content");
    const isCurrentlyOpen = parentItem.classList.contains("open-faq");

    document.querySelectorAll(".faq-accordion-item").forEach(item => {
        item.classList.remove("open-faq");
        item.querySelector(".faq-accordion-content").style.maxHeight = null;
    });

    if (!isCurrentlyOpen) {
        parentItem.classList.add("open-faq");
        contentPane.style.maxHeight = contentPane.scrollHeight + "px";
    }
};

// ==========================================
// 11. LEGAL LIGHTBOX DISPLAY ENGINE CONTROLLERS
// ==========================================
window.openLegalLightbox = (modalElementId) => {
    const activeTargetModal = document.getElementById(modalElementId);
    if (activeTargetModal) {
        activeTargetModal.classList.add("modal-visible");
        document.body.style.overflow = "hidden"; // Prevent background body displacement scrolling
    }
};

window.closeLegalLightbox = (modalElementId) => {
    const activeTargetModal = document.getElementById(modalElementId);
    if (activeTargetModal) {
        activeTargetModal.classList.remove("modal-visible");
        document.body.style.overflow = ""; 
    }
};

window.dismissGreetingPortal = () => {
    const portal = document.getElementById("greetingPortal");
    if (portal) {
        portal.style.opacity = "0";
        setTimeout(() => portal.style.display = "none", 500);
    }
};
