/**
 * ====================================================================
 * THE SOVEREIGN VOICE - EXECUTIVE MOBILIZATION ENGINE
 * Core Architecture Logic Baseline (Version 2.0)
 * Framework Year: 2026
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. REAL-TIME LIVE SYSTEM CHRONOGRAPH EXTENSION
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
    // 2. ANTHEM AUDIO PLAYER MATRIX
    // ==========================================
    const anthemAudio = document.getElementById("anthemAudioPlayer");
    const progressBar = document.getElementById("audio-progress-bar");
    const currentTimeText = document.getElementById("current-time");
    const totalDurationText = document.getElementById("total-duration");

    window.handleAnthemPlay = () => {
        if (anthemAudio) {
            anthemAudio.play().catch(err => console.log("Audio playback interaction requirement triggered:", err));
        }
    };

    window.handleAnthemPause = () => {
        if (anthemAudio) {
            anthemAudio.pause();
        }
    };

    if (anthemAudio) {
        anthemAudio.addEventListener("timeupdate", () => {
            const current = anthemAudio.currentTime;
            const duration = anthemAudio.duration || 52;
            
            if (progressBar) {
                const percentage = (current / duration) * 100;
                progressBar.style.width = `${percentage}%`;
            }

            if (currentTimeText) {
                const mins = Math.floor(current / 60);
                const secs = Math.floor(current % 60);
                currentTimeText.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            }
        });
    }


    // ==========================================
    // 3. DISPATCH & COPY ACCOUNTABILITY ENGINE
    // ==========================================
    const toastNotification = document.getElementById("clipboardToast");

    window.executeProtestDispatch = () => {
        const targetEmail = "d.pradhan@sansad.nic.in";
        const ccEmail = "minister.sm@gov.in";
        const subject = encodeURIComponent("Urgent Mandate: Educational Accountability and Examination Infrastructure Reform");
        const body = encodeURIComponent(
            "Dear Minister,\n\n" +
            "As an involved citizen, I am writing to formally voice my deep concerns regarding the recent structural systemic issues within our national examination infrastructure. Academic integrity and absolute transparency are crucial anchors for the future of our students.\n\n" +
            "We urge immediate administrative accountability, comprehensive reforms to secure examinations against vulnerabilities, and swift action to support the generations striving to contribute to our nation.\n\n" +
            "Respectfully submitted,\n" +
            "A Concerned Citizen of India"
        );

        window.location.href = `mailto:${targetEmail}?cc=${ccEmail}?subject=${subject}&body=${body}`;
    };

    window.executeFrameworkCopy = () => {
        const validationText = 
            "Subject: Urgent Mandate: Educational Accountability and Examination Infrastructure Reform\n\n" +
            "Dear Minister,\n\n" +
            "As an involved citizen, I am writing to formally voice my deep concerns regarding the recent structural systemic issues within our national examination infrastructure. Academic integrity and absolute transparency are crucial anchors for the future of our students.\n\n" +
            "We urge immediate administrative accountability, comprehensive reforms to secure examinations against vulnerabilities, and swift action to support the generations striving to contribute to our nation.\n\n" +
            "Respectfully submitted,\n" +
            "A Concerned Citizen of India";

        navigator.clipboard.writeText(validationText).then(() => {
            if (toastNotification) {
                toastNotification.classList.add("show");
                setTimeout(() => {
                    toastNotification.classList.remove("show");
                }, 3500);
            }
        }).catch(err => {
            console.error("Critical Clipboard execution failure:", err);
        });
    };


    // ==========================================
    // 4. AUTOMATED LIVE NEWS RADAR ENGINE
    // ==========================================
    const newsFeedTarget = document.getElementById("newsFeedTarget");

    const liveCampaignNewsStream = [
        {
            tag: "CRITICAL UPDATE",
            headline: "Sonam Wangchuk Pushes Fast From Hospital Ahead of March",
            snippet: "Despite forced hospital shift by police, Wangchuk calls on student fronts to keep the July 20 Parliament March strong.",
            iconClass: "fa-solid fa-hospital-user",
            iconColor: "#ff9933"
        },
        {
            tag: "DEVELOPING",
            headline: "CJP Confirms Night Vigil at Delhi Ahead of Parliament Route",
            snippet: "Abhijeet Dipke warns against youth suppression; student clusters deploy human chains near assembly zones.",
            iconClass: "fa-solid fa-users-rays",
            iconColor: "#ffffff"
        },
        {
            tag: "MANIFESTO",
            headline: "Academics Issue Open Demand Letter for Pradhan's Resignation",
            snippet: "Eminent scholars and former JNU professors join the mandate citing systemic examination leakage crisis.",
            iconClass: "fa-solid fa-file-signature",
            iconColor: "#138808"
        }
    ];

    function renderLiveNewsFeed() {
        if (!newsFeedTarget) return;
        newsFeedTarget.innerHTML = "";
        
        liveCampaignNewsStream.forEach(article => {
            const newsCardHtml = `
                <div class="news-card-node">
                    <div class="news-image-frame" style="display: flex; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.15);">
                        <i class="${article.iconClass}" style="font-size: 1.65rem; color: ${article.iconColor}; opacity: 0.85;"></i>
                    </div>
                    <div class="news-meta-block">
                        <span class="news-timestamp">${article.tag} • Live</span>
                        <h4 class="news-headline-txt">${article.headline}</h4>
                        <p class="news-snippet-txt">${article.snippet}</p>
                    </div>
                </div>
            `;
            newsFeedTarget.insertAdjacentHTML("beforeend", newsCardHtml);
        });
    }

    renderLiveNewsFeed();
});

// ==========================================
// 5. GREETING PORTAL SYSTEM DISMISSAL ROUTINE
// ==========================================
window.dismissGreetingPortal = () => {
    const portal = document.getElementById("greetingPortal");
    if (portal) {
        portal.style.opacity = "0";
        setTimeout(() => {
            portal.style.display = "none";
        }, 600);
    }
};
