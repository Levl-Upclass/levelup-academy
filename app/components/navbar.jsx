"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "@/public/img/logo.png";
import LogoWhite from "@/public/img/logo-white.png";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import clsx from "clsx";

export default function NavbarPage() {
  const [open, setOpen] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "h-[80px] py-4 px-8 top-[-100px] transition-all sticky text-white ",
        isScrolled &&
          "sticky top-[-12px]  delay-500 bg-white/90 backdrop-blur-sm text-deep  "
      )}
    >
      <nav
        className={
          "flex items-center gap-4 justify-center container mx-auto  max-lg:justify-between "
        }
      >
        <div className="lg:w-1/12 w-2/12 ">
          {isScrolled ? (
            <Image src={Logo} alt="logo" className="w-full" />
          ) : (
            <Image src={LogoWhite} alt="logo" className="w-full" />
          )}
        </div>
        <ul
          className={clsx(
            "items-center lg:space-x-8 lg:w-8/12 max-lg:fixed lg:flex max-lg:top-[100px] transition-all max-lg:left-0 max-lg:bg-tersier w-[300px] lg:h-0 h-screen",
            open && "max-lg:left-[-400px] "
          )}
        >
          <li className="py-8 px-12 lg:p-0">
            <Link href="#sale">Fresh Sale</Link>
          </li>
          <li className="flex gap-2 items-center py-8 px-12 lg:p-0">
            <Link href="#kelas">Kelas</Link> <AiFillCaretDown size={12} />{" "}
          </li>
          <li className="py-8 px-12 lg:p-0">
            <Link href="#benefit">Benefit</Link>
          </li>
          <li className="py-8 px-12 lg:p-0">
            <Link href="#testimoni">Testimoni</Link>
          </li>
        </ul>
        <div
          className={clsx(
            "items-center  text-deep lg:space-x-4 max-lg:space-y-4 max-lg:fixed max-lg:top-[470px] max-lg:left-[30px] lg:flex max-lg:w-[200px] w-2/12 transition-all ",
            open && "max-lg:left-[-200px] "
          )}
        >
          <div className="bg-tersier p-4 rounded-full cursor-pointer flex items-center gap-2">
            <BsSearch />
            <p className="lg:hidden">Search...</p>
          </div>
          <button className="font-bold lg:bg-tersier px-6 py-3 bg-primebase max-lg:text-white rounded-full max-lg:w-full">
            Masuk/Daftar
          </button>
        </div>
        <div
          className="p-2 rounded-xl border-2 border-tersier  lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <BiMenu size={32} />
        </div>
      </nav>
    </header>
  );
}
