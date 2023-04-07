// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI

const firebaseConfig = {
  apiKey: "AIzaSyBf15IUNCNS2Na7aoDIc2ntJCH7Ato12B0",
  authDomain: "vamosconversar.firebaseapp.com",
  databaseURL: "https://vamosconversar-default-rtdb.firebaseio.com",
  projectId: "vamosconversar",
  storageBucket: "vamosconversar.appspot.com",
  messagingSenderId: "147131308525",
  appId: "1:147131308525:web:68f9bbf4e00d7696e02fe4"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



