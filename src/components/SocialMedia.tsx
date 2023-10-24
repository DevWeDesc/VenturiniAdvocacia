import React, { ReactNode } from "react";

type ISocialMedia = {
  children: ReactNode;
  socialMediaName: string;
};

export const SocialMedia = ({ children, socialMediaName }: ISocialMedia) => {
  return (
    <div className="flex flex-col items-center w-20 gap-2">
      <div className="w-full flex justify-center rounded-full items-center h-20 bg-[#1E1E1E]">
        {children}
      </div>
      <p className="text-lg">{socialMediaName}</p>
    </div>
  );
};