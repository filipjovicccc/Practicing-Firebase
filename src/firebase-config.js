import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA-JS1ZacW4nyQ8526fp1JlCTUHGfqR2Ow",
  authDomain: "fir-practice-1e181.firebaseapp.com",
  projectId: "fir-practice-1e181",
  storageBucket: "fir-practice-1e181.appspot.com",
  messagingSenderId: "203063014851",
  appId: "1:203063014851:web:4a376b88c01ad313c1b976",
  measurementId: "G-GXGSZG7GPJ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
