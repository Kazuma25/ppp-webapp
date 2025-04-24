"use client";

import Link from "next/link";
import React from "react";
import SvgFooter from "../../../public/svg_footer.svg";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <Image
        src={SvgFooter}
        alt="Mon icône"
        className="w-screen h-auto opacity-70"
      />
      <div className="bg-[#322c2fb2] flex flex-row">
        <div className="flex flex-col ml-5 mb-10">
          <h1 className="text-green-500 text-xl ">
            Des liens Utiles pour ton aventure :
          </h1>
          <nav className="ml-5 mt-2">
            <ul className="flex flex-col space-x-6 text-white text-lg font-semibold">
              <li>
                <Link href="https://www.dofusbook.net/fr/" className="hover:underline">
                  DofusBook
                </Link>
              </li>
              <li>
                <Link href="https://www.dofuspourlesnoobs.com/" className="hover:underline">
                  Dofus pour les noobs
                </Link>
              </li>
              <li>
                <Link href="https://souchy.github.io/encyclofus/#/feca" className="hover:underline">
                  Encyclofus
                </Link>
              </li>
              <li>
                <Link href="https://dofusplanet.fr/" className="hover:underline">
                  DofusPlanet
                </Link>
              </li>
              <li>
                <Link href="https://dofusdb.fr/fr/" className="hover:underline">
                  Dofusdb
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col ml-20">
            <h1 className="text-green-500 text-xl ">Nous rejoindre :</h1>
            <nav className="ml-5 mt-2">
            <ul className="flex flex-col space-x-6 text-white text-lg font-semibold">
              <li>
                <Link href="#" className="hover:underline">
                  Discord 
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Alliance PPP sur dofus
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Guilde  White Widows sur dofus
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
