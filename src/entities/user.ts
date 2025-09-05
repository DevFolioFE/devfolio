import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

export async function getUserProfile(uid: string) {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() : null;
}
