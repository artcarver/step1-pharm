<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="style.css"/>
  <title>Pixorize Tracker — Step 1</title>
  <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js"></script>
</head>
<body data-resource="pixorize">

<div class="header">
  <div class="header-inner">
    <a href="index.html" class="back-link">← Back to Hub</a>
    <h1 class="brand-title">Pixorize Tracker</h1>
    <p class="brand-sub"><span id="header-remaining">0</span> remaining &nbsp;·&nbsp; 32h 37m total content</p>
    <div class="stat-chip"><div class="num" style="color:var(--green)" id="header-completed">0 / 0</div><div class="lbl">Fully Complete</div></div>
  </div>
</div>

<div class="content" id="main-content">
  </div>

<script src="study_data.js"></script>
<script src="tracker_logic.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyBBzOGRAhCD5AOnHnAN47q-j_coCMx2buo",
    authDomain: "sketchy-tracker.firebaseapp.com",
    projectId: "sketchy-tracker",
    storageBucket: "sketchy-tracker.firebasestorage.app",
    messagingSenderId: "970470066509",
    appId: "1:970470066509:web:14c7300fb1dd882a038f04",
    measurementId: "G-2KVBCP4THR"
  };
  initTracker(firebaseConfig);
</script>
</body>
</html>
