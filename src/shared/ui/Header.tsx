import Logo from "@/assets/icons/logo.svg";
import Test_Profile from "@/assets/icons/test_profile.svg";
import Image from "next/image";
import Link from "next/link";

import { Login } from "./Login";

/**
 * Header component
 * @returns {JSX.Element}
 */

export function Header() {
  const isLoggedIn: boolean = true;
  const textLinkList: Array<{ href: string; text: string }> = [
    { href: "/", text: "Home" },
    { href: "/edit", text: "Edit" },
    { href: "/explore", text: "Explore" },
    { href: "/dashboard", text: "Dashboard" },
  ];
  return (
    <header className="flex w-full h-[65px] items-center justify-between px-10 py-3 relative border-b [border-bottom-style:solid] border-[var(--color-border)]">
      {/* logo & service name */}
      <section className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        <div className="inline-flex items-center">
          <div className="flex-1 w-4 grow">
            <Image className="w-[15px] h-[15px]" alt="logo" src={Logo} />
          </div>
        </div>
        <div className="inline-flex items-center">
          <p className="text-h6 whitespace-nowrap">DevFolio</p>
        </div>
      </section>

      {/* navigation links */}
      <section className="flex items-center justify-end gap-8 flex-1 grow">
        <nav className="gap-9 flex h-10 items-center">
          {textLinkList.map(({ href, text }) => (
            <Link key={href} href={href} className="flex h-10 items-center">
              <p className="text-body-md-medium whitespace-nowrap">{text}</p>
            </Link>
          ))}
        </nav>

        {/* Github Login */}
        {!isLoggedIn ? (
          <Login text="Login with GitHub" />
        ) : (
          <Link href="/dashboard">
            <Image
              alt="profile"
              src={Test_Profile}
              className="cursor-pointer"
            />
          </Link>
        )}
      </section>
    </header>
  );
}
