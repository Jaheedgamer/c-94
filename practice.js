
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBBrsvM14EcQ5mTcI7F2tBmOa7xOjEMuKs",
    authDomain: "kwitter-8b72f.firebaseapp.com",
    databaseURL: "https://kwitter-8b72f-default-rtdb.firebaseio.com",
    projectId: "kwitter-8b72f",
    storageBucket: "kwitter-8b72f.appspot.com",
    messagingSenderId: "117710517085",
    appId: "1:117710517085:web:23f9330b23bd377257aeb4"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("User_name").value;
    firebase.database().ref("/").child(user_name).update({
    game:"Minecraft"
    });

    document.getElementById("User_name").value=" ";
}