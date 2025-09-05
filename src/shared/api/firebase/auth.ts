import { useAuthStore } from "@/shared/store/useAuthStore";
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./config";

// GitHub login
export async function signInWithGitHub() {
  const provider = new GithubAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const credential = GithubAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;

  if (!token) {
    throw new Error("No access token obtained from GitHub");
  }

  useAuthStore.getState().setAuth(result.user.uid, token);
  const userRef = doc(db, "users", result.user.uid);
  await setDoc(
    userRef,
    {
      uid: result.user.uid,
      photoURL: result.user.photoURL,
      email: result.user.email,
      role: "",
      location: "",
      yearsOfExperience: 0,
      aboutMe: "",
      skiles: [],
      tags: [],
      achievements: {
        repos: 0,
        stars: 0,
        forks: 0,
        followers: 0,
      },
      activityTrends: {
        commits: { "2monthsAgo": 0, "1monthAgo": 0, currentMonth: 0 },
        pullRequests: { "2monthsAgo": 0, "1monthAgo": 0, currentMonth: 0 },
        stars: {},
      },
      contributionBreakdown: {
        commits: 0,
        pullRequests: 0,
        codeReviews: 0,
      },
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
  return { user: result.user, token };
}

// GitHub logout
export async function signOutWithGitHub() {
  await signOut(auth);
  useAuthStore.getState().clearToken();
}
