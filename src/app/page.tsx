import { LinkPreview } from "@/features/home/ui";
import TestSvg from "@/assets/icons/test_preview.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white">
      <LinkPreview
        imageSrc={TestSvg}
        title="Profile Header"
        description="Showcase your skills and experience with a customizable profile header."
      />
    </div>
  );
}
