import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {

   apiKey: "AIzaSyA4E8Mn3C-tixeZ21fHUqThlUaQYTcEO1Y",

   authDomain: "aboutme-9934b.firebaseapp.com",

   projectId: "aboutme-9934b",

   storageBucket: "aboutme-9934b.firebasestorage.app",

   messagingSenderId: "256672992607",

   appId: "1:256672992607:web:e2cfcfeeb37a6ecb5ebaea"

 };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 
 document.addEventListener('DOMContentLoaded', function() {
     const loginButton = document.getElementById('btn-login');
     const emailInput = document.getElementById('email');
     const passwordInput = document.getElementById('password');
 
     if (loginButton && emailInput && passwordInput) {
         loginButton.addEventListener('click', function(event) {
             event.preventDefault();
 
             const email = emailInput.value;
             const password = passwordInput.value;
 
             console.log("Email:", email);
             console.log("Password:", password);
 
             signInWithEmailAndPassword(auth, email, password)
                 .then((userCredential) => {
                     const user = userCredential.user;
                     window.location.href = "home.html";
                 })
                 .catch((error) => {
                     const errorCode = error.code;
                     const errorMessage = error.message;
                     console.error("Login error:", errorCode, errorMessage);
                     alert("Login failed: " + errorMessage);
                 });
         });
     } else {
         console.error("Login elements not found.");
     }
 });
