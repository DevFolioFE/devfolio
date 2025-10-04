import { Button } from "@/shared/ui";
import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  status: string;
  language: string;
}
export function ProjectCard(props: ProjectCardProps) {
  return (
    <article className="flex p-4 items-start">
      <Image
        src={props.imageSrc}
        alt="project-card"
        width={422}
        height={242}
        className="rounded-[8px]"
      />
      <div className="flex w-[422px] flex-col p-4 gap-[17px] justify-center items-start">
        <span className="text-h6">{props.title}</span>
        <div className="flex flex-col gap-1">
          <span className="text-body-md-regular text-[#61758A] line-clamp-3">
            {props.description}
          </span>
          <span className="text-body-md-regular text-[#61758A]">
            {props.status} | {props.language}
          </span>
        </div>
        <Button text="Delete" bgColor="gray" />
      </div>
    </article>
  );
}
