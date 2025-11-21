// User Profile Management
class UserProfile {
    constructor() {
        this.profile = this.loadProfile() || this.getDefaultProfile();
    }

    getDefaultProfile() {
        return {
            name: "John Doe",
            email: "",
            age: "",
            height: "",
            weight: "",
            gender: "",
            fitnessGoal: "",
            injuries: "",
            joinDate: new Date().toISOString()
        };
    }

    saveProfile(profileData) {
        this.profile = {...this.profile, ...profileData};
        localStorage.setItem('fitAIProfile', JSON.stringify(this.profile));
        this.updateProfileDisplay();
    }

    loadProfile() {
        return JSON.parse(localStorage.getItem('fitAIProfile'));
    }

    updateProfileDisplay() {
        const profileImg = document.getElementById('profileBtn');
        if (profileImg && this.profile.name) {
            profileImg.textContent = this.profile.name.split(' ').map(n => n[0]).join('').toUpperCase();
        }
    }

    getWorkoutPlan() {
        // Generate personalized plan based on profile
        return this.generatePlan();
    }

    generatePlan() {
        // This would generate a custom workout plan
        return {
            goal: this.profile.fitnessGoal,
            difficulty: 'beginner',
            workouts: []
        };
    }
}

// Initialize user profile
const userProfile = new UserProfile();
