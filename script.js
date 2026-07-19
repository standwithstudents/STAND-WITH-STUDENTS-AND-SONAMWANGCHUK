/* ==========================================================================
   GLOBAL CONFIGURATION & DIRECT ROUTING CONSTANTS
   ========================================================================== */
const ROUTING_CONFIG = {
    to: "d.pradhan@sansad.nic.in",
    cc: "minister.sm@gov.in",
    subject: "Urgently Requesting Structural Accountability: National Education Infrastructure",
    body: "To,\nThe Ministry of Education, Government of India\n\nSubject: Demand for Systemic Accountability and Administrative Resignations\n\nRespected Dignitaries,\n\nWe write this as deeply concerned citizens, students, and stakeholders of India’s future. The catastrophic chain of systemic lapses, structural failures, and unaddressed paper leaks within our highest national examination frameworks have severely damaged public confidence and fundamentally harmed the health and mental well-being of millions of students.\n\nTrue leadership requires administrative accountability. The hard work of Indian youth cannot be compromised by prolonged institutional negligence. Standing in unified solidarity with the call for transparent civic reforms championed by public figures like Sonam Wangchuk, we collectively mandate that immediate responsibility be taken at the highest administrative levels to restore institutional trust and pave the way for real structural reforms.\n\nThe student community is the cornerstone of India, and their futures must be protected above all else.\n\nSincerely,\nA Unified Voice for Student Justice\n\n--- End of Message ---"
};

/* ==========================================================================
   1. DIRECT ACTION DISPATCH HUB (EMAIL & CLIPBOARD)
   ========================================================================== */
function executeProtestDispatch() {
    const mailtoUrl = `mailto:${ROUTING_CONFIG.to}?cc=${ROUTING_CONFIG.cc}&subject=${encodeURIComponent(ROUTING_CONFIG.subject)}&body=${encodeURIComponent(ROUTING_CONFIG.body)}`;
    window.location.href = mailtoUrl;
}

function executeFrameworkCopy() {
    const plainTextTemplate = `TO: ${ROUTING_CONFIG.to}\nCC: ${ROUTING_CONFIG.cc}\nSUBJECT: ${ROUTING_CONFIG.subject}\n\nMESSAGE:\n${ROUTING_CONFIG.body}`;
    
    navigator.clipboard.writeText(plainTextTemplate).then(() => {
        const toast = document.getElementById("clipboardToast");
        if (toast) {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4000);
        }
    }).catch(err => {
        console.error("System Clipboard cache delivery failed: ", err);
    });
}

/* ==========================================================================
   2. 🇮🇳 NATIVE DEVICE-AGNOSTIC AUDIO PLAYER CONTROLLER
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("anthemAudioPlayer");
    const playBtn = document.getElementById("btn-play-anthem");
    const pauseBtn = document.getElementById("btn-pause-anthem");
    const progressBar = document.getElementById("audio-progress-bar");
    const currentTimeDisplay = document.getElementById("current-time");
    const durationDisplay = document.getElementById("total-duration");
    const progressContainer = document.querySelector(".progress-slider-container");

    if (!audioPlayer || !playBtn || !pauseBtn || !progressBar) return;

    // Direct Time/Progress Alignment Update Engine
    audioPlayer.addEventListener("timeupdate", () => {
        const current = audioPlayer.currentTime;
        const duration = audioPlayer.duration || 52; // Fallback to anthem standard execution runtime
        
        // Update visual timeline bar width percent
        const progressPercent = (current / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        // Format and render current runtime stamp
        const currentMins = Math.floor(current / 60);
        const currentSecs = Math.floor(current % 60).toString().padStart(2, '0');
        currentTimeDisplay.textContent = `${currentMins}:${currentSecs}`;
    });

    // Capture standard audio metadata duration if accessible
    audioPlayer.addEventListener("loadedmetadata", () => {
        const duration = audioPlayer.duration;
        const durationMins = Math.floor(duration / 60);
        const durationSecs = Math.floor(duration % 60).toString().padStart(2, '0');
        durationDisplay.textContent = `${durationMins}:${durationSecs}`;
    });

    // Reset UI state cleanly upon tracking completion
    audioPlayer.addEventListener("ended", () => {
        progressBar.style.width = "0%";
        currentTimeDisplay.textContent = "0:00";
        playBtn.style.filter = "none";
    });

    // Allow scrubbing/skipping through the timeline by clicking the track
    if (progressContainer) {
        progressContainer.addEventListener("click", (e) => {
            const width = progressContainer.clientWidth;
            const clickX = e.offsetX;
            const duration = audioPlayer.duration || 52;
            audioPlayer.currentTime = (clickX / width) * duration;
        });
    }
});

/* Global window scope functions mapped directly to html semantic attributes */
function handleAnthemPlay() {
    const audioPlayer = document.getElementById("anthemAudioPlayer");
    const playBtn = document.getElementById("btn-play-anthem");
    
    if (audioPlayer) {
        audioPlayer.play().then(() => {
            // Highlighting design accents under active playback state
            playBtn.style.filter = "brightness(1.2) contrast(1.1)";
        }).catch(err => {
            console.warn("Cross-browser modern media interaction security protocol intercept captured: ", err);
        });
    }
}

function handleAnthemPause() {
    const audioPlayer = document.getElementById("anthemAudioPlayer");
    const playBtn = document.getElementById("btn-play-anthem");
    
    if (audioPlayer) {
        audioPlayer.pause();
        if (playBtn) playBtn.style.filter = "none";
    }
}
