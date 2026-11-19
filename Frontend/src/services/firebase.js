// Firebase App
import { initializeApp } from "firebase/app";

// Firebase Analytics
import { getAnalytics } from "firebase/analytics";

// Firebase Authentication
import {
    getAuth,
    GoogleAuthProvider,
    GithubAuthProvider,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYz3NCTkfvF284Ili4yjx5yKyHu-iccnQ",
    authDomain: "reconwork-3844a.firebaseapp.com",
    projectId: "reconwork-3844a",
    storageBucket: "reconwork-3844a.firebasestorage.app",
    messagingSenderId: "272698836795",
    appId: "1:272698836795:web:186ed34c3ef3478bb9991e",
    measurementId: "G-BLD4XTKSNB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics
const analytics = getAnalytics(app);

// Authentication
const auth = getAuth(app);

// Google Authentication Provider
const googleProvider = new GoogleAuthProvider();

// GitHub Authentication Provider
const githubProvider = new GithubAuthProvider();

// Export
export {
    app,
    analytics,
    auth,
    googleProvider,
    githubProvider,
};