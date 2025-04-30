"use client";

import Link from "next/link";
import React from "react";
import logoWhiteWidows from "../../../public/logo_WhiteWidow.png"
import Image from "next/image";

export function HeaderTuto() {

  return (
    <>
      <Image
        src={logoWhiteWidows}
        alt="logosPPP"
        className="w-15 absolute flex z-999 m-2"
      />
      <div className="relative w-full h-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4 z-10 ">
          <div className="absolute top-0 left-0 w-full flex justify-end px-10 py-6 backdrop-blur-sm bg-green-800/25 z-20">
            <nav className="">
              <ul className="flex space-x-6 text-white text-lg font-semibold">
                <li>
                  <Link href="/" className="hover:underline font-mono font-bold">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/tuto" className="hover:underline underline font-mono font-bold">
                    Nos tutoriels
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
