"use client";

import Link from "next/link";
import { ModeToggle } from "./theme/ModeToggle";
import { Button } from "./ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "@/context/state-context";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contacts" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const { isOpen, setIsOpen } = useStateContext();
  const pathName = usePathname();

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 lg:px-12 h-16 w-full">
      <Link href="/">
        <p className="dark:text-purple-500 font-bold font-mono">333Edits</p>
      </Link>
      <section className="hidden md:flex-1 md:flex justify-center space-x-3">
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link
              className={
                isActive
                  ? "border-b-2 text-purple-500 border-purple-500 pb-1 font-bold"
                  : ""
              }
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </section>
      <div className="flex-1 md:hidden mr-3 ml-3"></div>
      <ModeToggle />
      <Button
        className="md:hidden"
        variant="outline"
        size="icon"
        onClick={handleClick}
      >
        {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </Button>
    </nav>
  );
}
