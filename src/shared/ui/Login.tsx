"use client";
/**
 * Login button component
 * @param text - Display text for the button
 * @returns {JSX.Element}
 */

import { fetchGitHubData, signInWithGitHub } from "../api";
export function Login({ text }: { text?: string }) {
  const handleLogin = async () => {
    const { user, token } = await signInWithGitHub();
    fetchGitHubData(token);
  };

  return (
    <button
      className="flex max-w-[480px] min-w-[84px] h-12 items-center justify-center px-5 bg-primary rounded-lg cursor-pointer"
      onClick={handleLogin}
    >
      <p className="text-body-lg-bold text-white whitespace-nowrap overflow-hidden">
        {text}
      </p>
    </button>
  );
}
