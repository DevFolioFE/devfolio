"use client";

import Image from "next/image";
import { AList, BList } from "../constants/InfoBlockData";
import { useEffect, useState } from "react";

/**
 * InfoBlock component
 * @returns {JSX.Element}
 */

export function InfoBlock({ type }: { type: "A" | "B" }) {
  const [dataList, setDataList] = useState<
    Array<{ icon: string; title: string; content: string }>
  >([]);
  useEffect(() => {
    if (type === "A") {
      setDataList(AList);
    } else {
      setDataList(BList);
    }
  }, [type]);

  return (
    <article className="flex flex-col w-[960px] h-[407px] gap-10 px-4 py-10">
      {/* Text */}
      <div className="flex flex-col gap-4">
        <p className="text-h2">
          {type === "A" ? "Key Features" : "Value Proposition"}
        </p>
        <p className="text-body-lg-regular w-[720px]">
          {type === "A"
            ? `DevFolio offers a suite of tools designed to showcase your
              development work with elegance and efficiency.`
            : `DevFolio's automation features significantly reduce the time spent
              on portfolio preparation, allowing you to showcase your work
              faster.`}
        </p>
      </div>

      {/* Card */}
      <div className="flex items-start gap-3">
        {dataList?.map(({ icon, title, content }, idx) => (
          <div
            key={idx}
            className="w-[301px] h-[178px] gap-3 p-4 bg-white rounded-lg border border-solid border-[#dbe0e5] flex flex-col items-start"
          >
            {/* Icon */}
            <div className=" flex-1 w-6 grow">
              <Image className="w-5 h-5" alt="icon" src={icon} />
            </div>

            <div className="flex flex-col items-start gap-1 w-full">
              {/* Title */}
              <div className="flex flex-col items-start w-full">
                <p className="text-body-lg-tight">{title}</p>
              </div>
              {/* Content */}
              <div className="w-full flex flex-col items-start ">
                <p className="text-body-md-regular text-[#61758A]">{content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
