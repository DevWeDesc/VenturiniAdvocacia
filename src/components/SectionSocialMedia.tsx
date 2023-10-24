import React from "react";
import { BsTelephone, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FiFacebook, FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { SocialMedia } from "./SocialMedia";

export const SectionSocialMedia = () => {
  return (
    <div className="relative grid grid-cols-3 gap-11 px-8">
      <SocialMedia socialMediaName="Contato">
        <BsTelephone className="text-3xl text-colorDefault" />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <BsWhatsapp className="text-3xl text-colorDefault" />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <BsInstagram className="text-3xl text-colorDefault" />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <FiFacebook className="text-3xl text-colorDefault" />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <FiMapPin className="text-3xl text-colorDefault" />
      </SocialMedia>
      <SocialMedia socialMediaName="Contato">
        <TfiWorld className="text-3xl text-colorDefault font-normal" />
      </SocialMedia>
    </div>
  );
};
