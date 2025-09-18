"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui";
import DeleteIcon from "@/assets/icons/delete.svg";

interface ImageInputProps {
  title: string;
  subTitle: string;
  maxImages: number;
  onFileSelect?: (file: File) => void;
}

/**
 * Image upload component with preview
 * @param title Title text to display
 * @param subTitle Subtitle text to display
 * @param maxImages Maximum number of images that can be uploaded
 * @param onFileSelect Callback function that receives the selected file
 * @returns {JSX.Element}
 */

export function ImageInput({
  title,
  subTitle,
  maxImages,
  onFileSelect,
}: ImageInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [textShow, setTextShow] = useState<boolean>(true);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  useEffect(() => {
    setTextShow(previewUrls.length === 0);
  }, [previewUrls.length]);

  const processFiles = (files: File[]) => {
    const totalFiles = previewUrls.length + files.length;

    if (totalFiles > maxImages) {
      setShowWarning(true);
      return;
    }
    setShowWarning(false);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...urls]);
    files.forEach((file) => {
      onFileSelect?.(file);
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    processFiles(files);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/"),
    );

    processFiles(files);
  };

  return (
    <div className="w-full p-4 flex flex-col">
      <div
        className="py-14 rounded-lg outline-dashed outline-offset-[-2px] outline-[#DBE0E5] flex flex-col justify-center items-center gap-6 cursor-pointer transition-colors duration-200 hover:bg-gray-50"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p className={`text-h6 font-bold ${textShow ? "" : "hidden"}`}>
          {title}
        </p>
        <p className={`text-body-md-regular ${textShow ? "" : "hidden"}`}>
          {subTitle}
        </p>
        {previewUrls.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 w-full mx-auto">
            {previewUrls.map((url, idx) => (
              <div key={url} className="relative w-[120px] aspect-video">
                <Image
                  alt={`preview-${idx}`}
                  src={url}
                  fill
                  sizes="120px"
                  className="object-cover rounded-md"
                />
                <button
                  onClick={() => {
                    URL.revokeObjectURL(url);
                    setPreviewUrls((prev) => prev.filter((u) => u !== url));
                    setShowWarning(false);
                  }}
                  className="absolute top-1 right-1 bg-white/10 rounded-full p-1 shadow-md cursor-pointer"
                >
                  <Image src={DeleteIcon} alt="delete" width={6} height={6} />
                </button>
              </div>
            ))}
          </div>
        )}
        {showWarning && (
          <p className="text-xs text-red-500">
            이미지는 최대 {maxImages}개까지 업로드 가능합니다.
          </p>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpg,image/jpeg,image/png,image/webp"
          multiple
          className="hidden"
        />
        <Button text="upload" bgColor="gray" onClick={handleButtonClick} />
      </div>
    </div>
  );
}
