interface ButtonProps {
  text: string;
  bgColor?: "blue" | "gray";
}

export function Button({ text, bgColor = "blue" }: ButtonProps) {
  const bg = {
    blue: "bg-[var(--color-primary)]",
    gray: "bg-[#F0F2F5]",
  };

  return (
    <button
      className={`h-10 px-4 rounded-[8px] flex justify-center items-center ${bg[bgColor]}`}
    >
      <p
        className={`text-center justify-start text-body-sm-bold leading-tight ${bgColor === "gray" ? "text-[#121417]" : "text-white"}`}
      >
        {text}
      </p>
    </button>
  );
}
