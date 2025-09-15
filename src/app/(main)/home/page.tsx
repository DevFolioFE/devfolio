import MainImg from "@/assets/images/MainImg.svg";
import MyImg from "@/assets/images/MyImg.svg";
import ExploreImg from "@/assets/images/ExploreImg.svg";
import DashboardImg from "@/assets/images/DashboardImg.svg";
import { InfoBlock, LinkPreview } from "@/features/home/ui";
import { Login, TitleBox } from "@/shared/ui";
import { cn } from "@/shared/utils/cn";
import Image from "next/image";

const PREVIEW_DATA = [
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

export default function Home() {
  return (
    <article
      className={cn(
        "flex flex-col w-full min-h-screen items-center justify-start py-5 ",
      )}
    >
      <Image src={MainImg} alt="상단 이미지" width={928} height={520} />
      <InfoBlock type="A" />
      <InfoBlock type="B" />
      <section className="flex flex-col w-full items-center ">
        <TitleBox title="Demo Preview" />
        <div
          className={cn("flex w-full p-4 items-center gap-3 justify-center")}
        >
          {PREVIEW_DATA.map((item, idx) => (
            <LinkPreview
              key={idx}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col w-[960px] px-10 py-20 justify-end items-center gap-8">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-h2">Ready to showcase your work?</span>
          <span className="text-body-lg-regular">
            Start building your portfolio in minutes.
          </span>
        </div>
        <Login text="Login with GitHub" />
      </section>
    </article>
  );
}
