import GithubSvg from "@/assets/icons/github.svg";
import CodeSvg from "@/assets/icons/code.svg";
import PersonSvg from "@/assets/icons/person.svg";
import ClockSvg from "@/assets/icons/clock.svg";
import DocumentSvg from "@/assets/icons/document.svg";
import ShareSvg from "@/assets/icons/share.svg";
import MyImg from "@/assets/images/MyImg.svg";
import ExploreImg from "@/assets/images/ExploreImg.svg";
import DashboardImg from "@/assets/images/DashboardImg.svg";

export const AList: Array<{ icon: string; title: string; content: string }> = [
  {
    icon: GithubSvg,
    title: "Auto Integration",
    content:
      "Import GitHub repositories automatically, keeping your portfolio up-to-date with your latest projects.",
  },
  {
    icon: CodeSvg,
    title: "Visual UI",
    content:
      "Behance-style project cards and a modern design that highlights your projects in a visually appealing way.",
  },
  {
    icon: PersonSvg,
    title: "Personal Page",
    content:
      "Shareable portfolio at devfolio.app/u/<username>, making it easy to present your work to potential employers or collaborators.",
  },
];

export const BList: Array<{ icon: string; title: string; content: string }> = [
  {
    icon: ClockSvg,
    title: "Save Preparation Time",
    content:
      "Automation features significantly reduce the time spent on portfolio preparation, allowing you to showcase your work faster.",
  },
  {
    icon: DocumentSvg,
    title: "Explain Projects with Context",
    content:
      "Provide detailed context for your projects, going beyond just code to explain the purpose, challenges, and outcomes.",
  },
  {
    icon: ShareSvg,
    title: "Instantly Shareable",
    content:
      "Your portfolio is instantly shareable, making it convenient for hiring managers and collaborators to view your work.",
  },
];
export const PREVIEW_DATA = [
  {
    imageSrc: MyImg,
    title: "Profile Header",
    description:
      "Showcase your skills and experience with a customizable profile header.",
    link: "/my",
  },
  {
    imageSrc: ExploreImg,
    title: "Project Showcase",
    description:
      "Present your projects in a visually appealing card format, highlighting key details and achievements.",
    link: "/explore",
  },
  {
    imageSrc: DashboardImg,
    title: "Activity Dashboard",
    description:
      "Display your technical skills and proficiencies in an organized manner.",
    link: "/dashboard",
  },
];
