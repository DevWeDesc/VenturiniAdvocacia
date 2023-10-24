"use client";
import React, { useEffect, useState } from "react";
import PhotoVictor from "../../public/PhotoVictor.png";
import Image from "next/image";
import { SectionSocialMedia } from "./SectionSocialMedia";
import { Footer } from "./Footer";

export const InfoPeople = () => {
  const text = "Victor Venturini Brandão";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);
  return (
    <div className="mt-[60vw] flex pb-12 flex-col items-center gap-10 lg:mt-20 xxl:mt-9">
      <Image alt="" className="px-14 z-10" src={PhotoVictor} />
      <div className="flex flex-col items-center gap-5 px-8">
        <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-0">
          <h1 className="text-white text-5xl z-10 font-title text-center">
            <span className="text-colorDefault">
              {displayText.substring(0, 1)}
            </span>
            {displayText.substring(1, 7)}{" "}
            <span className="text-colorDefault">
              {displayText.substring(7, 8)}
            </span>
            {displayText.substring(8)}
          </h1>
          <div className="hidden lg:block w-[80px] h-[3px] bg-colorDefault rounded-full mt-2" />
        </div>
        <p className="text-lg max-w-[135px] text-center opacity-80 hover:opacity-100 transition-all">
          ADVOGADO OAB/SP 435.191
        </p>
      </div>
    </div>
  );
};
