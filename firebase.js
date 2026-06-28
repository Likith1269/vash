const firebaseConfig = {
    apiKey: "AIzaSyDd8LOHWHwqHQvVPTwW9mDvkeT89PVWl_w",
    authDomain: "vash-41979.firebaseapp.com",
    projectId: "vash-41979",
    storageBucket: "vash-41979.firebasestorage.app",
    messagingSenderId: "232498354705",
    appId: "1:232498354705:web:bb6e22547173050c82efb0",
    measurementId: "G-5N3VTQ3L1V"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

console.log("Firebase connected successfully");