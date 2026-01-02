// config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd6xl_cD_xPEmjDRsv5Oef0Rjtxxpl3Js",
  authDomain: "kopilka-b00b0.firebaseapp.com",
  projectId: "kopilka-b00b0",
  storageBucket: "kopilka-b00b0.firebasestorage.app",
  messagingSenderId: "802634786752",
  appId: "1:802634786752:web:8670ef754677d8ebe00a25"
};

// Инициализируем и экспортируем приложение
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp); // Добавляем Firestore
export default firebaseConfig;