/**
 * Login button component
 * @param text - Display text for the button
 * @returns {JSX.Element}
 */

export function Login({ text }: { text?: string }) {
  return (
    <button className="flex max-w-[480px] min-w-[84px] h-12 items-center justify-center px-5 bg-primary rounded-lg cursor-pointer">
      <p className="text-body-lg-bold whitespace-nowrap overflow-hidden">
        {text}
      </p>
    </button>
  );
}
