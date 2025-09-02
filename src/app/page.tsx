import { InfoBlock } from "@/features/home/ui/InfoBlock";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white">
      <InfoBlock type="A" />
      <InfoBlock type="B" />
    </div>
  );
}
