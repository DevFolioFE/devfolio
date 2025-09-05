import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import axios from "axios";

const db = getFirestore();

export async function fetchGitHubData(token: string) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const { data: repos } = await axios.get("https://api.github.com/user/repos", {
    headers,
  });
  const { data: followers } = await axios.get(
    "https://api.github.com/user/followers",
    { headers },
  );

  return {
    achivements: {
      repos: repos.length,
      followers: followers.length,
      stars: repos.reduce(
        (acc: number, repo: { stargazers_count: number }) =>
          acc + repo.stargazers_count,
        0,
      ),
      forks: repos.reduce(
        (acc: number, repo: { forks_count: number }) => acc + repo.forks_count,
        0,
      ),
    },
    // After ADD GitHub GraphQL API
    contributionBreakdown: {
      commits: 0,
      pullRequests: 0,
      codeReviews: 0,
    },
    repos,
    followers,
  };
}

export async function updateGitHubDataInFirestore(uid: string, token: string) {
  const { achivements, contributionBreakdown } = await fetchGitHubData(token);

  const userRef = doc(db, "users", uid);
  await setDoc(
    userRef,
    {
      achievements: achivements,
      contributionBreakdown: contributionBreakdown,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}
