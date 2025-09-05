import { Login } from "@/shared/ui";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white">
      <Login text="Login with GitHub" />
    </div>
  );
}
