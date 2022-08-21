import { database } from "../firebase";
import { useAuth } from "../auth/UserAuthContext";
import { useRouter } from "next/router";

import {
  doc,
  updateDoc,
  deleteField,
  setDoc,
  collection,
  getDoc,
  set,
  getDocFromServer,
} from "firebase/firestore";


import { encode, decode } from "firebase-encode";

export function addStats(auth, obj) {

  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "stats");


  setDoc(docRef, { age: obj.age, gender: obj.gender, weight: obj.weight, height: obj.height, neck: obj.neck, waist: obj.waist, hip: obj.hip}, { merge: true});

  return;
}
