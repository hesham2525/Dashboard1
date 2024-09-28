import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4TnCP4_zcsXQ8nXICSUY_YflB0GsZG2M",
  authDomain: "anfalnajd.firebaseapp.com",
  projectId: "anfalnajd",
  storageBucket: "anfalnajd.appspot.com",
  messagingSenderId: "234724720892",
  appId: "1:234724720892:web:dfd5b61b367b7ffcccd779",
  measurementId: "G-4GGY90HCYM"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
//finish
    