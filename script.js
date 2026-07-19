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
        // Automatically release workspace frames once internal components resolve
        setTimeout(() => {
            pageLoader.style.opacity = "0";
            setTimeout(() => {
                pageLoader.style.display = "none";
                initializeCounterNumericalHeartbeat();
            }, 400);
        }, 600);
    }

    // ==========================================
    // 2. SEGMENTED NAVIGATION ROUTE HIGHLIGHTING SCROLL ENGINE
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
    // 3. SCROLL-DRIVEN INTERACTION REVEAL INTERSECTION
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
    // 4. STEP NUMERICAL CEILING COUNT ENGINES
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
    // 5. BACK TO TOP SCROLL WINDOW TRIGGERS
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
    // 6. REAL-TIME SYSTEM CHRONOGRAPH HEARTRATE LOOP
    // ==========================================
    const chronoDateEl = document.getElementById("liveChronoDate");
    const chronoTimeEl = document.getElementById("liveChronoTime");

    function runSystemChronograph() {
        const now = new Date();
        const dateOptions = { year: 'numeric', month: 'short', day: '2-digit' };
        if (chronoDateEl) {
            chronoDateEl.textContent = now.toLocaleDateString('en-US', dateOptions);
        }

        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        
        const formattedTime = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
        
        if (chronoTimeEl) {
            chronoTimeEl.textContent = formattedTime;
        }
    }
    runSystemChronograph();
    setInterval(runSystemChronograph, 1000);

    // ==========================================
    // 7. SOCIAL HOOK INTERACTION INTERFACES
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
            alert("Movement payload and framework link copied! Opening Instagram pipelines now.");
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
    // 9. AUTOMATED FEED TIMELINE LOADER
    // ==========================================
    const newsFeedTarget = document.getElementById("newsFeedTarget");
    const liveCampaignNewsStream = [
        { tag: "CRITICAL UPDATE", headline: "Sonam Wangchuk Pushes Fast From Hospital Ahead of March", snippet: "Despite forced hospital shift by police, Wangchuk calls on student fronts to keep the July 20 Parliament March strong.", iconClass: "fa-solid fa-hospital-user", iconColor: "#ff9933" },
        { tag: "DEVELOPING", headline: "CJP Confirms Night Vigil at Delhi Ahead of Parliament Route", snippet: "Abhijeet Dipke warns against youth suppression; student clusters deploy human chains near assembly zones.", iconClass: "fa-solid fa-users-rays", iconColor: "#ffffff" },
        { tag: "MANIFESTO", headline: "Academics Issue Open Demand Letter for Pradhan's Resignation", snippet: "Eminent scholars and former JNU professors join the mandate citing systemic examination leakage crisis.", iconClass: "fa-solid fa-file-signature", iconColor: "#138808" }
    ];

    if (newsFeedTarget) {
        newsFeedTarget.innerHTML = liveCampaignNewsStream.map(art => `
            <div class="news-card-node">
                <div class="news-image-frame" style="display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.15);">
                    <i class="${art.iconClass}" style="font-size: 1.25rem; color: ${art.iconColor};"></i>
                </div>
                <div class="news-meta-block">
                    <span class="news-timestamp">${art.tag}</span>
                    <h4 class="news-headline-txt" style="font-size:0.8rem; margin:2px 0;">${art.headline}</h4>
                    <p class="news-snippet-txt" style="font-size:0.75rem; color:#94a3b8; margin:0;">${art.snippet}</p>
                </div>
            </div>
        `).join('');
    }
});

// INITIAL DISMISSAL SYSTEM CONTROLLER FOR GREETING PORTAL OVERLAY
window.dismissGreetingPortal = () => {
    const portal = document.getElementById("greetingPortal");
    if (portal) {
        portal.style.opacity = "0";
        setTimeout(() => portal.style.display = "none", 500);
    }
};
