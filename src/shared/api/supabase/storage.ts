import { supabase } from "./client";
import { doc, setDoc, getFirestore, serverTimestamp } from "firebase/firestore";

const db = getFirestore();

export async function uploadFile(uid: string, file: File) {
  const path = `${uid}/${file.name}`;
  const { error } = await supabase.storage
    .from("profile-images")
    .upload(path, file, { upsert: true });

  if (error) {
    throw error;
  }

  const publicUrl = supabase.storage.from("profile-images").getPublicUrl(path)
    .data.publicUrl;

  const userRef = doc(db, "users", uid);
  await setDoc(
    userRef,
    { photoURL: publicUrl, updatedAt: serverTimestamp() },
    { merge: true },
  );

  return publicUrl;
}
