"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "./icons/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container relative z-50 max-w-5xl p-0 py-4 text-white sm:px-4">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4",
          { hidden: isOpen },
        )}
      >
        <Link href="/" className="text-xl font-bold">
          <Logo />
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden space-x-4 md:flex">
            <Link href="#features" className="hover:text-gray-300">
              Features
            </Link>
            <Link href="#how-does-it-work" className="hover:text-gray-300">
              How does it work?
            </Link>
            <Link href="#faq" className="hover:text-gray-300">
              FAQ
            </Link>
          </div>
        </div>
        <div className="hidden space-x-4 md:flex">
          <Link
            href="#try-it-out"
            className="rounded bg-[#823CB4] px-4 py-3 text-center font-semibold hover:bg-[#823CB4]/90"
          >
            Try it out
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed left-0 top-0 h-full w-full space-y-4 bg-[#0E0610] p-4 text-white md:hidden"
        >
          <div className="flex w-full justify-end">
            <button onClick={toggleMenu} className="pr-4 focus:outline-none">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <Link
            href="#features"
            className="block px-4 py-3 text-center font-semibold hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            href="#how-does-it-work"
            className="block px-4 py-3 text-center font-semibold hover:bg-gray-700"
            onClick={toggleMenu}
          >
            How does it work?
          </Link>
          <Link
            href="#faq"
            className="block px-4 py-3 text-center font-semibold hover:bg-gray-700"
            onClick={toggleMenu}
          >
            FAQ
          </Link>
          <Link
            href="#try-it-out"
            className="block rounded bg-[#823CB4] px-4 py-3 text-center font-semibold hover:bg-[#823CB4]/90"
            onClick={toggleMenu}
          >
            Try it out
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
