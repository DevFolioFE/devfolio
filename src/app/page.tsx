import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white">
      {redirect("/home")}
    </div>
  );
}
