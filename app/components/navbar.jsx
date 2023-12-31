"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
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
  const toggleNavbar = useRef();

  function handleOpen(e) {
    if (!toggleNavbar.current.contains(e.target)) {
      setOpen(true);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("click", handleOpen);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        " py-4 px-8 top-[-100px] transition-all sticky z-10 ",
        isScrolled &&
          "sticky top-[-12px] delay-500 bg-white/90 backdrop-blur-sm   "
      )}
    >
      <nav
        className={
          "flex items-center gap-4 justify-center container mx-auto  max-lg:justify-between relative "
        }
      >
        <div className="lg:w-1/12 max-sm:w-3/12 w-2/12 ">
          {isScrolled ? (
            <Image src={Logo} alt="logo" className="w-full" />
          ) : (
            <Image src={LogoWhite} alt="logo" className="w-full" />
          )}
        </div>
        <ul
          className={clsx(
            "items-center lg:space-x-8 lg:w-8/12 max-lg:fixed lg:flex max-lg:top-[80px]  transition-all max-lg:left-0 max-lg:bg-tersier w-[300px] lg:h-0 h-screen ",
            open && "max-lg:left-[-400px]  "
          )}
        >
          <li
            className={
              !isScrolled
                ? "py-8 px-12 lg:p-0 lg:text-white"
                : "py-8 px-12 lg:p-0 text-black"
            }
          >
            <Link href="#sale">Fresh Sale</Link>
          </li>
          <li
            className={
              !isScrolled
                ? "flex gap-2 items-center py-8 px-12 lg:p-0 lg:text-white"
                : "flex gap-2 items-center py-8 px-12 lg:p-0 text-black"
            }
          >
            <Link href="#kelas">Kelas</Link> <AiFillCaretDown size={12} />{" "}
          </li>
          <li
            className={
              !isScrolled
                ? "py-8 px-12 lg:p-0 lg:text-white"
                : "py-8 px-12 lg:p-0 text-black"
            }
          >
            <Link href="#benefit">Benefit</Link>
          </li>
          <li
            className={
              !isScrolled
                ? "py-8 px-12 lg:p-0 lg:text-white"
                : "py-8 px-12 lg:p-0 text-black"
            }
          >
            <Link href="#testimoni">Testimoni</Link>
          </li>
        </ul>
        <div
          className={
            !open
              ? "items-center  text-deep lg:space-x-4 max-lg:space-y-4 max-lg:fixed max-lg:top-[470px] max-lg:left-[30px] lg:flex max-lg:w-[200px] w-2/12 transition-all "
              : "items-center  text-deep lg:space-x-4 max-lg:space-y-4 max-lg:fixed max-lg:top-[470px] max-lg:left-[30px] lg:flex max-lg:w-[200px] w-2/12 transition-all max-lg:hidden"
          }
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
          ref={toggleNavbar}
          className={
            !isScrolled
              ? "p-2 rounded-xl border-2 border-tersier  lg:hidden cursor-pointer"
              : "p-2 rounded-xl border-2 border-deep/20  lg:hidden cursor-pointer"
          }
          onClick={(event) => {
            event.stopPropagation();
            setOpen(!open);
          }}
        >
          <BiMenu
            size={32}
            className={!isScrolled ? "text-white" : "text-deep"}
          />
        </div>
      </nav>
    </header>
  );
}
