export {
  signInWithGitHub,
  signOutWithGitHub,
} from "@/shared/api/firebase/auth";
export { auth, db, storage } from "@/shared/api/firebase/config";
export { getUserProfile } from "@/entities/user";
export { uploadFile } from "@/shared/api/supabase/storage";
export {
  updateGitHubDataInFirestore,
  fetchGitHubData,
} from "./github/fetchGitHubData";
