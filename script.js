/**
 * ====================================================================
 * THE SOVEREIGN VOICE - EXECUTIVE MOBILIZATION ENGINE
 * Core Architecture Logic Baseline & Animation Matrix (Version 2.0)
 * Framework Year: 2026
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. ADVANCED INITIALIZATION NATIVE PAGE LOADER
    // ==========================================
    const pageLoader = document.getElementById("page-loader-curtain");
    if (pageLoader) {
        window.addEventListener("load", () => {
            pageLoader.style.opacity = "0";
            setTimeout(() => {
                pageLoader.style.display = "none";
                // Trigger counter numeric increments immediately after asset load
                initializeCounterNumericalHeartbeat();
            }, 500);
        });
        
        // Safety insurance trigger in case browser load event deferred
        setTimeout(() => {
            if (pageLoader.style.display !== "none") {
                pageLoader.style.opacity = "0";
                setTimeout(() => pageLoader.style.display = "none", 500);
                initializeCounterNumericalHeartbeat();
            }
        }, 2500);
    }


    // ==========================================
    // 2. STICKY ACTIVE SEGMENT ROUTING SCROLL SNIPER
    // ==========================================
    const routingLinks = document.querySelectorAll(".nav-link-item");
    const operationalSections = document.querySelectorAll("section, article, main");

    window.addEventListener("scroll", () => {
        let currentActiveSectionId = "";
        operationalSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 180)) {
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
    // 3. SCROLL-DRIVEN INTERACTION REVEAL ENGINE
    // ==========================================
    const elementsToReveal = document.querySelectorAll(".reveal-on-scroll, .reveal-slide-left");
    
    const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("reveal-slide-left")) {
                    entry.target.classList.add("active-slide");
                } else {
                    entry.target.classList.add("active-fade");
                }
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    elementsToReveal.forEach(el => scrollRevealObserver.observe(el));


    // ==========================================
    // 4. METRIC TILES HIGHSPEED NUMERICAL INCREMENT COUNTERS
    // ==========================================
    function initializeCounterNumericalHeartbeat() {
        const counterNodes = document.querySelectorAll("[data-target-count]");
        counterNodes.forEach(node => {
            const ceilingValue = parseInt(node.getAttribute("data-target-count"), 10);
            const cycleDuration = 1800; // Time in ms
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
    // 5. NATIVE BUTTON RIPPLE DYNAMICS FACTORY
    // ==========================================
    const interactableRippleElements = document.querySelectorAll(".ripple-effect");
    interactableRippleElements.forEach(btn => {
        btn.addEventListener("click", function(e) {
            const boundingBox = this.getBoundingClientRect();
            const clickPositionX = e.clientX - boundingBox.left;
            const clickPositionY = e.clientY - boundingBox.top;
            
            const rippleSpark = document.createElement("span");
            rippleSpark.classList.add("ripple-element");
            rippleSpark.style.left = `${clickPositionX}px`;
            rippleSpark.style.top = `${clickPositionY}px`;
            
            this.appendChild(rippleSpark);
            setTimeout(() => rippleSpark.remove(), 600);
        });
    });


    // ==========================================
    // 6. BACK TO TOP SCROLL UTILITY CONTROLLER
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
    // 7. REAL-TIME LIVE SYSTEM CHRONOGRAPH HEARTBEAT
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
    // 8. SOCIAL DISPATCH NETWORKS HOOKS
    // ==========================================
    const whatsappAnchor = document.getElementById("whatsappShareBtn");
    const instagramAnchor = document.getElementById("instagramShareBtn");
    
    const crossPlatformSharePayload = "Join 'The Sovereign Voice' National Movement demanding full systemic education accountability and infrastructural reforms. Stand with India's students: ";
    
    if (whatsappAnchor) {
        whatsappAnchor.addEventListener("click", function(e) {
            const dynamicRouteUri = encodeURIComponent(window.location.href);
            this.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(crossPlatformSharePayload)}${dynamicRouteUri}`;
        });
    }

    if (instagramAnchor) {
        instagramAnchor.addEventListener("click", function(e) {
            e.preventDefault();
            // Deep linking constraints restrict dynamic text input directly to feeds; execute clipboard backup strategy
            navigator.clipboard.writeText(`${crossPlatformSharePayload} ${window.location.href}`);
            alert("Movement link and text copied to clipboard! Opening Instagram, paste to your Story or DM channels.");
            window.open("https://onelink.to/instagram", "_blank");
        });
    }


    // ==========================================
    // 9. ANTHEM AUDIO CONTROLS MATRIX
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
    // 10. AUTOMATED NEWS RADAR RENDER
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
                    <i class="${art.iconClass}" style="font-size: 1.45rem; color: ${art.iconColor};"></i>
                </div>
                <div class="news-meta-block">
                    <span class="news-timestamp">${art.tag} • Live</span>
                    <h4 class="news-headline-txt">${art.headline}</h4>
                    <p class="news-snippet-txt">${art.snippet}</p>
                </div>
            </div>
        `).join('');
    }
});

// GREETING MODAL CLOSURE ACTION HANDLER
window.dismissGreetingPortal = () => {
    const portal = document.getElementById("greetingPortal");
    if (portal) {
        portal.style.opacity = "0";
        setTimeout(() => portal.style.display = "none", 600);
    }
};
