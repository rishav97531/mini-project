// Main website functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const profileBtn = document.getElementById('profileBtn');
    const profileModal = document.getElementById('profileModal');
    const startTrainingBtn = document.getElementById('startTrainingBtn');
    const startTrainingModal = document.getElementById('startTrainingModal');
    const startCameraBtn = document.getElementById('startCameraBtn');
    const closeModalButtons = document.querySelectorAll('.close-modal, .btn-secondary');
    const profileForm = document.getElementById('profileForm');
    const confirmTrainingBtn = document.getElementById('confirmTrainingBtn');
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Open Profile Modal
    profileBtn.addEventListener('click', () => {
        profileModal.style.display = 'flex';
    });

    // Open Start Training Modal
    startTrainingBtn.addEventListener('click', () => {
        startTrainingModal.style.display = 'flex';
    });

    // Start Camera for Posture Detection
    startCameraBtn.addEventListener('click', () => {
        feedbackMessage.textContent = "Initializing camera and AI posture detection...";
        // In a real implementation, this would initialize MediaPipe and OpenCV
        setTimeout(() => {
            feedbackMessage.innerHTML = "<span style='color: var(--success);'>✓ Camera activated successfully!</span><br>AI is now analyzing your posture. Try performing a squat to see real-time feedback.";
        }, 2000);
    });

    // Confirm Training Start
    confirmTrainingBtn.addEventListener('click', () => {
        startTrainingModal.style.display = 'none';
        feedbackMessage.textContent = "Initializing camera and AI posture detection...";
        setTimeout(() => {
            feedbackMessage.innerHTML = "<span style='color: var(--success);'>✓ Camera activated successfully!</span><br>AI is now analyzing your posture. Try performing a squat to see real-time feedback.";
        }, 2000);
    });

    // Close Modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            profileModal.style.display = 'none';
            startTrainingModal.style.display = 'none';
        });
    });

    // Handle Profile Form Submission
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Profile saved successfully!');
        profileModal.style.display = 'none';
    });

    // Handle Goal Card Clicks
    const goalCards = document.querySelectorAll('.goal-card');
    goalCards.forEach(card => {
        card.addEventListener('click', () => {
            const goal = card.getAttribute('data-goal');
            alert(`You selected the ${goal.replace('-', ' ')} goal! This would open a detailed page in a full implementation.`);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === profileModal) {
            profileModal.style.display = 'none';
        }
        if (e.target === startTrainingModal) {
            startTrainingModal.style.display = 'none';
        }
    });

    // Simulate AI feedback changes
    setInterval(() => {
        if (feedbackMessage.textContent.includes("squat")) {
            const messages = [
                "Good form! Keep your back straight as you lower down.",
                "Try to keep your knees behind your toes during the squat.",
                "Excellent depth! You're hitting the perfect squat position.",
                "Remember to engage your core throughout the movement."
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            feedbackMessage.innerHTML = `<span style="color: var(--accent);">AI Feedback:</span> ${randomMessage}`;
        }
    }, 5000);
});