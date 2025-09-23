interface ButtonProps {
  text: string;
  bgColor?: "blue" | "gray";
  onClick?: () => void;
}

/**
 * Button component with two color options (blue, gray)
 * @param {Object} props - Button component properties
 * @param {string} props.text - Button text content
 * @param {('blue'|'gray')} props.bgColor - Background color of the button
 * @param {function} props.onClick - Click event handler
 * @returns {JSX.Element}
 */

export function Button({ text, bgColor = "blue", onClick }: ButtonProps) {
  const bg = {
    blue: "bg-primary text-white",
    gray: "bg-[#F0F2F5] hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={`cursor-pointer h-10 px-4 rounded-[8px] flex justify-center items-center ${bg[bgColor]}`}
      onClick={onClick}
    >
      <p className="text-center justify-start text-body-md-bold leading-tight">
        {text}
      </p>
    </button>
  );
}
