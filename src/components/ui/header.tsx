"use client";

import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import SVG from "../../../public/test_svg (2).svg";
import logoWhiteWidows from "../../../public/logo_WhiteWidow.png"
import logoDofus from "../../../public/Dofus_Logo.png"
import Image from "next/image";
import { useEffect, useState } from 'react';
import DoubleButton from './doubleButton';

const VideoPlayer = dynamic(() => import("@/components/ui/VideoPlayer"), {
  ssr: false,
});

const texts = [
  "Premier message",
  "Deuxième message",
  "Troisième message",
  "Quatrième message",
];


export function Header() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Image
        src={logoWhiteWidows}
        alt="logosPPP"
        className="w-15 absolute flex z-999 m-2"
      />
      <div className="relative w-full h-120 overflow-hidden">
        <VideoPlayer />
        {/* Overlay général */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4 z-10 ">
          {/* Menu top fixe */}
          <div className="absolute top-0 left-0 w-full flex justify-end px-10 py-6 backdrop-blur-sm bg-green-800/25 z-20">
            <nav className="">
              <ul className="flex space-x-6 text-white text-lg font-semibold">
                <li>
                  <Link href="/" className="hover:underline underline font-mono font-bold">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/tuto" className="hover:underline font-mono">
                    Nos tutoriels
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Contenu centré */}
          <div className="z-10 mt-20">
            <Image
              src={logoDofus}
              alt="Logo Dofus"
              className="w-48 mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-4xl font-bold">
              Site communautaire de l'alliance PPP
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Nous sommes une communauté !
            </p>
          </div>
          <div className="mt-4">
            <DoubleButton/>
          </div>
        </div>
      </div>
      <Image src={SVG} alt="Mon icône" className="w-screen h-auto opacity-70" />
    </>
  );
}
