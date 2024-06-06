"use client";
import Image from "next/image";
import { Hero } from "./components/Hero";
import { Bet } from "./components/Bet";
import { Thesis } from "./components/Thesis";
import { AndroidAgent0 } from "./components/AndroidAgent0";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-center">
      <Hero />
      <Bet />
      <Thesis />
      <AndroidAgent0 />
    </main>
  );
}
