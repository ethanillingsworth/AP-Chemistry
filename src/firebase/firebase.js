// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsgHQ9M9S1m4i_s51yC-cYOn2YuaYPLog",
    authDomain: "ap-illingsworth.firebaseapp.com",
    projectId: "ap-illingsworth",
    storageBucket: "ap-illingsworth.firebasestorage.app",
    messagingSenderId: "388686220111",
    appId: "1:388686220111:web:3d6ce4c4666816ee84133a",
    measurementId: "G-6705GM6GDD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const ai = getAI(app, {
    backend: new GoogleAIBackend(),
});

export const model = getGenerativeModel(ai, {
    model: "gemini-3-flash-preview",
    systemInstruction:
        "You are LameyBot, an AI assistant for AP Chemistry students. Answer questions related to AP Chemistry in a clear and concise manner. Use markdown formatting for your responses, including LaTeX for any chemical equations or formulas.",
    generationConfig: { maxOutputTokens: 1024 },
});
