import React from "react";
import { BsTelephone, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FiFacebook, FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { SocialMedia } from "./SocialMedia";

export const SectionSocialMedia = () => {
  const styleIcons = "text-3xl text-colorDefault lg:text-4xl";
  return (
    <div className="relative grid grid-cols-3 justify-items-center gap-11 px-12 lg:gap-5 lg:px-32">
      <SocialMedia socialMediaName="Contato">
        <BsTelephone className={styleIcons} />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <BsWhatsapp className={styleIcons} />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <BsInstagram className={styleIcons} />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <FiFacebook className={styleIcons} />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <FiMapPin className={styleIcons} />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <TfiWorld className={styleIcons} />
      </SocialMedia>
    </div>
  );
};
