import Image from "next/image";
import { LinkPreviewProps } from "../types/LinkPreviewProp";
import Link from "next/link";

/**
 * LinkPreview Component
 * @param imageSrc - The source URL of the image to display
 * @param title - The title of the link
 * @param description - A brief description of the link
 * @param link - The URL to navigate to when the preview is clicked
 * @returns {JSX.Element}
 */

export function LinkPreview({
  imageSrc,
  title,
  description,
  link,
}: LinkPreviewProps) {
  return (
    <Link
      href={link}
      className="flex flex-col w-[301.33px] h-[272px] items-start gap-4 rounded-lg cursor-pointer"
    >
      <Image
        alt="대표 이미지"
        src={imageSrc}
        className="w-full h-[169px] rounded-lg"
      />
      <section className="flex flex-col items-start self-stretch w-full">
        <div className="flex flex-col items-start w-full">
          <span className="text-body-lg-medium">{title}</span>
        </div>
        <div className="flex flex-col items-start w-full">
          <span className="text-body-md-regular text-[#61758A]">
            {description}
          </span>
        </div>
      </section>
    </Link>
  );
}
