import React, { ReactNode } from "react";

type ISocialMedia = {
  children: ReactNode;
  socialMediaName: string;
  href: string;
};

export const SocialMedia = ({
  children,
  socialMediaName,
  href,
}: ISocialMedia) => {
  return (
    <a
      target="_blank"
      href={href}
      className="flex flex-col items-center w-20 gap-2"
    >
      <div className="w-full flex justify-center rounded-full items-center h-20 bg-[#1E1E1E] lg:w-[125px] lg:h-[125px]  cursor-pointer opacity-80 hover:opacity-100 transition-all">
        {children}
      </div>
      <p className="text-lg">{socialMediaName}</p>
    </a>
  );
};
