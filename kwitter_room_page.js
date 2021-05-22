var firebaseConfig = {
    apiKey: "AIzaSyCk_GLoHXLZo0ujU-VKolVFgYz_wKDtu0Q",
    authDomain: "kwitter-54bf3.firebaseapp.com",
    projectId: "kwitter-54bf3",
    storageBucket: "kwitter-54bf3.appspot.com",
    messagingSenderId: "391109386381",
    appId: "1:391109386381:web:39c3b521782c2e09d142c4",
    measurementId: "G-KNGMQPTDS5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
});});}
getData();