
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDgFZ8EdHF9RX4Cq6NHPLD1JXzftHLyKB4",
  authDomain: "admin-78962.firebaseapp.com",
  projectId: "admin-78962",
  storageBucket: "admin-78962.appspot.com",
  messagingSenderId: "100040535471",
  appId: "1:100040535471:web:d634cfad755a91555b135a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth( )
export const db = getFirestore(app);
export const storage = getStorage(app);