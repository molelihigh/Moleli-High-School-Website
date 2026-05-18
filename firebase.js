<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC8poono4ErA7oPWPueoAbskoe4TyMQihE",
    authDomain: "moleliresults.firebaseapp.com",
    projectId: "moleliresults",
    storageBucket: "moleliresults.firebasestorage.app",
    messagingSenderId: "442236651659",
    appId: "1:442236651659:web:6a0a0acd2dcd3488182c8e",
    measurementId: "G-XVPZSW7R23"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>