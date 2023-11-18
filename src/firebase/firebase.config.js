// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyA1aC5lqYzWMRMXr3u5wdCbCWlQb_GTywI",
//   authDomain: "restaurant-boss-c1fb6.firebaseapp.com",
//   projectId: "restaurant-boss-c1fb6",
//   storageBucket: "restaurant-boss-c1fb6.appspot.com",
//   messagingSenderId: "1045408687266",
//   appId: "1:1045408687266:web:a9f5a478800d15fc0463fb"
// };
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;