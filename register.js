 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";

 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

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
      const cadastroButton = document.getElementById('cadastro-bt');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirmPassword');
  
      if (cadastroButton && emailInput && passwordInput && confirmPasswordInput) {
          cadastroButton.addEventListener('click', function(event) {
              event.preventDefault(); // Prevent default form submission
  
              const email = emailInput.value;
              const password = passwordInput.value;
              const confirmPassword = confirmPasswordInput.value;
  
              if (password === confirmPassword) {
                  createUserWithEmailAndPassword(auth, email, password)
                      .then((userCredential) => {
                          // Signed in
                          const user = userCredential.user;
                          console.log("User created:", user);
                          alert("Cadastro realizado com sucesso!");
                          // Redirect to home page or another page
                          window.location.href = "home.html"; // Adjust the path as needed
                      })
                      .catch((error) => {
                          const errorCode = error.code;
                          const errorMessage = error.message;
                          console.error("Cadastro error:", errorCode, errorMessage);
                          alert("Cadastro falhou: " + errorMessage);
                      });
              } else {
                  alert("As senhas não coincidem.");
              }
          });
      } else {
          console.error("Cadastro elements not found.");
      }
  });

