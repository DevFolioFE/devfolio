import Image from "next/image";
import { LinkPreviewProps } from "../types/LinkPreviewProp";

export function LinkPreview({
  imageSrc,
  title,
  description,
}: LinkPreviewProps) {
  return (
    <article className="flex flex-col w-[301.33px] h-[272px] items-start gap-4 rounded-lg cursor-pointer">
      <Image
        alt="test"
        src={imageSrc}
        className="w-full h-[169px] rounded-lg"
      />
      <section className="flex flex-col items-start self-stretch w-full">
        <div className="flex flex-col items-start w-full">
          <p className="text-body-lg-medium">{title}</p>
        </div>
        <div className="flex flex-col items-start w-full">
          <p className="text-body-md-regular text-[#61758A]">{description}</p>
        </div>
      </section>
    </article>
  );
}
