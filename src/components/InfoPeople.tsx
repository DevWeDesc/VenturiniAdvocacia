import React from "react";
import PhotoVictor from "../../public/PhotoVictor.png";
import Image from "next/image";
import { SectionSocialMedia } from "./SectionSocialMedia";
import { Footer } from "./Footer";

export const InfoPeople = () => {
  return (
    <div className="mt-[60vw] flex pb-12 flex-col items-center gap-10 lg:hidden">
      <Image alt="" className="px-14 z-10" src={PhotoVictor} />
      <div className="flex flex-col items-center gap-5 px-8">
        <h1 className="text-white text-5xl z-10 font-title text-center">
          <span className="text-colorDefault">V</span>ictor{" "}
          <span className="text-colorDefault">V</span>enturini Brandão
        </h1>
        <p className="text-lg max-w-[135px] text-center opacity-80 hover:opacity-100 transition-all">
          ADVOGADO OAB/SP 435.191
        </p>
      </div>
    </div>
  );
};
