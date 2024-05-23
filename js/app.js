
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";
  import { getFirestore,addDoc,collection } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"; 

  const firebaseConfig = {
    apiKey: "AIzaSyAYbVhd6O7KdYRV8cnD9webpoKkzQ98Pps",
    authDomain: "fir-96802.firebaseapp.com",
    projectId: "fir-96802",
    storageBucket: "fir-96802.appspot.com",
    messagingSenderId: "635241325088",
    appId: "1:635241325088:web:ed3682adfe5e94ab279245",
    measurementId: "G-9TF0K2SGZ9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage();
  const db = getFirestore(app);


function creat() {

  let email=document.getElementById("email").value
  let password=document.getElementById("password").value
  

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log("account created successfully");
    console.log(user);
    alert("sign up sucessfull")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert("UserName Alredy Taken")
    console.log(errorMessage);
  });
   


const storageRef = ref(storage,email);

uploadBytes(storageRef, file)
.then((snapshot) => {
  console.log("Uploaded a file");
  console.log(snapshot);
})
.catch((error)=>{
console.log(error);
})



addDoc(collection(db, "vikash"), {
 mobilenumder:mob,
 dateofbirth:data
});





}


module.creat=creat



function signin() {

  let email=document.getElementById("email").value
  let password=document.getElementById("password").value

 

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log("login account successfully");
      console.log(user);
      alert("Login Sucessfull....#")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("UserName or Password INCORRECT")
      console.log(errorMessage);
    });
}
module.signin=signin