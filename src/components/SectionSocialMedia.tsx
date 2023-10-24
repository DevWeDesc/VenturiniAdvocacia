import React from "react";
import { BsTelephone, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FiFacebook, FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { SocialMedia } from "./SocialMedia";

export const SectionSocialMedia = () => {
  const styleIcons = "text-3xl text-colorDefault lg:text-4xl";
  return (
    <div className="relative grid grid-cols-3 justify-items-center gap-11 px-12 lg:px-32">
      <SocialMedia
        href="https://api.whatsapp.com/send/?phone=5511940244221&text=Ol%C3%A1%21+Tudo+bem%3F+Gostaria+de+falar+com+o+advogado+Dr.+Victor+Venturini+&type=phone_number&app_absent=0"
        socialMediaName="Contato"
      >
        <BsTelephone className={styleIcons} />
      </SocialMedia>
      <SocialMedia
        href="https://api.whatsapp.com/send/?phone=5511940244221&text=Ol%C3%A1%21+Tudo+bem%3F+Gostaria+de+falar+com+o+advogado+Dr.+Victor+Venturini+&type=phone_number&app_absent=0"
        socialMediaName="WhatsApp"
      >
        <BsWhatsapp className={styleIcons} />
      </SocialMedia>
      <SocialMedia
        href="https://www.instagram.com/victorventuriniadv/"
        socialMediaName="Instagram"
      >
        <BsInstagram className={styleIcons} />
      </SocialMedia>
      <SocialMedia
        href="https://www.facebook.com/victorventurinib"
        socialMediaName="Facebook"
      >
        <FiFacebook className={styleIcons} />
      </SocialMedia>
      <SocialMedia
        href="https://www.google.com.br/maps/place/R.+Indaiatuba,+188+-+Jardim+Haydee,+Mau%C3%A1+-+SP,+09370-275/@-23.6757437,-46.4617408,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce69610ef96661:0x24045e1d3378db69!8m2!3d-23.6757437!4d-46.4617408!16s%2Fg%2F11g02tp703?entry=ttu"
        socialMediaName="Localização"
      >
        <FiMapPin className={styleIcons} />
      </SocialMedia>
      <SocialMedia href="#" socialMediaName="Site">
        <TfiWorld className={styleIcons} />
      </SocialMedia>
    </div>
  );
};
